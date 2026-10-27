#!/usr/bin/env python3
"""Inspect publishable files, ZIP contents and optional reachable Git history.

Findings never include matching secret values. An optional private-pattern JSON
file stays outside published content. This is a targeted leak check, not a
security certification or a guarantee that all personal information is found.
"""
import argparse
import io
import json
import os
from pathlib import Path, PurePosixPath
import re
import subprocess
import sys
import zipfile

PROJECT_NAME = "Moyu contributors"
PROJECT_EMAIL = "contributors@opencode-moyu.invalid"
MAX_ARCHIVE_BYTES = 100 * 1024 * 1024
SECRET_PATTERNS = [
    ("private-key", re.compile(rb"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----")),
    ("github-token", re.compile(rb"(?:gh[pousr]_[A-Za-z0-9]{35,}|github_pat_[A-Za-z0-9_]{70,})")),
    ("aws-access-key", re.compile(rb"\bAKIA[A-Z0-9]{16}\b")),
    ("google-api-key", re.compile(rb"\bAIza[0-9A-Za-z_-]{35}\b")),
]


class Audit:
    def __init__(self, private_patterns=()):
        self.private_patterns = [str(value).encode().lower() for value in private_patterns if len(str(value)) >= 5]
        self.findings = []
        self.counts = {"files": 0, "historyBlobs": 0, "archiveEntries": 0, "commits": 0}
        self.seen = set()

    def flag(self, path, kind):
        self.findings.append({"path": path, "kind": kind})

    def inspect(self, path, data, depth=0):
        parts = PurePosixPath(path.replace("\\", "/")).parts
        leaf = parts[-1] if parts else ""
        if any(p in {".git", "keys", ".moyu"} for p in parts) or leaf.endswith((".key", ".enc", ".moyubook", ".moyuvid", ".pem", ".p12", ".pfx", ".p8", ".credentials.json")) or leaf == "hosts.yml" or leaf.startswith(".env") and leaf != ".env.example" or re.match(r"cookies.*\.(json|txt)$", leaf, re.I) or ".moyu-backup-" in leaf:
            self.flag(path, "private-file")
        if any(value in data.lower() for value in self.private_patterns):
            self.flag(path, "private-pattern")
        for kind, pattern in SECRET_PATTERNS:
            if pattern.search(data):
                self.flag(path, kind)
        if data.startswith(b"PK\x03\x04"):
            if depth >= 3:
                self.flag(path, "archive-depth-limit"); return
            try:
                with zipfile.ZipFile(io.BytesIO(data)) as archive:
                    if sum(info.file_size for info in archive.infolist()) > MAX_ARCHIVE_BYTES:
                        self.flag(path, "archive-size-limit"); return
                    if archive.testzip() is not None:
                        self.flag(path, "bad-archive"); return
                    if any(value in archive.comment.lower() for value in self.private_patterns):
                        self.flag(path, "archive-private-comment")
                    for info in archive.infolist():
                        if info.is_dir():
                            continue
                        self.counts["archiveEntries"] += 1
                        self.inspect(path + "::" + info.filename, archive.read(info), depth + 1)
            except (zipfile.BadZipFile, RuntimeError, ValueError, NotImplementedError):
                self.flag(path, "unreadable-archive")

    def worktree(self, root):
        names = git(root, "ls-files", "--cached", "--others", "--exclude-standard", "-z").split(b"\0")
        for raw in dict.fromkeys(names):
            if not raw:
                continue
            name = os.fsdecode(raw)
            path = root / name
            if path.is_symlink():
                self.flag(name, "publish-symlink"); continue
            if not path.exists():
                continue
            self.counts["files"] += 1
            self.inspect(name, path.read_bytes())

    def history(self, root, revision):
        git(root, "rev-parse", "--verify", revision + "^{commit}")
        metadata = git(root, "log", "--format=%H%x00%an%x00%ae%x00%cn%x00%ce%x00%ai%x00%ci", revision).decode().splitlines()
        for line in metadata:
            oid, author, email, committer, committer_email, author_date, committer_date = line.split("\0")
            self.counts["commits"] += 1
            if (author, email, committer, committer_email) != (PROJECT_NAME, PROJECT_EMAIL, PROJECT_NAME, PROJECT_EMAIL):
                self.flag("commit:" + oid, "commit-identity")
            if not author_date.endswith("+0000") or not committer_date.endswith("+0000"):
                self.flag("commit:" + oid, "commit-timezone")
        objects = git(root, "rev-list", "--objects", revision).splitlines()
        process = subprocess.Popen(["git", "cat-file", "--batch"], cwd=root, stdin=subprocess.PIPE, stdout=subprocess.PIPE)
        try:
            for row in objects:
                oid, _, raw_name = row.partition(b" ")
                if oid in self.seen:
                    continue
                self.seen.add(oid)
                process.stdin.write(oid + b"\n"); process.stdin.flush()
                header = process.stdout.readline().split()
                if len(header) != 3:
                    raise RuntimeError("Cannot read Git object")
                size = int(header[2]); data = process.stdout.read(size)
                if len(data) != size or process.stdout.read(1) != b"\n":
                    raise RuntimeError("Truncated Git object")
                if header[1] == b"blob":
                    self.counts["historyBlobs"] += 1
                    self.inspect("history:" + oid.decode() + ":" + os.fsdecode(raw_name), data)
                elif header[1] == b"commit":
                    # Includes messages and optional headers, without logging their contents.
                    if any(value in data.lower() for value in self.private_patterns):
                        self.flag("commit:" + oid.decode(), "private-pattern")
        finally:
            process.stdin.close(); process.stdout.close()
            if process.wait(timeout=10) != 0:
                raise RuntimeError("Git object inspection failed")


def git(root, *args):
    return subprocess.check_output(["git", *args], cwd=root)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parent.parent)
    parser.add_argument("--history", help="Reachable commit revision to inspect")
    parser.add_argument("--private-patterns", type=Path, help="Private JSON array of literal values, never copied into a report")
    parser.add_argument("--report", type=Path, help="Write a local detailed report with mode 0600")
    options = parser.parse_args()
    patterns = [str(Path.home())]
    if options.private_patterns:
        private = json.loads(options.private_patterns.read_text())
        if not isinstance(private, list) or not all(isinstance(value, str) for value in private):
            raise ValueError("Private patterns must be a JSON array of strings")
        patterns.extend(private)
    audit = Audit(patterns)
    audit.worktree(options.root)
    if options.history:
        audit.history(options.root, options.history)
    if options.report:
        descriptor = os.open(options.report, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
        os.fchmod(descriptor, 0o600)
        with os.fdopen(descriptor, "w") as report:
            json.dump({"counts": audit.counts, "findings": audit.findings}, report, indent=2)
    print(json.dumps({"counts": audit.counts, "findings": len(audit.findings), "passed": not audit.findings}))
    return bool(audit.findings)


if __name__ == "__main__":
    sys.exit(main())

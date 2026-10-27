import importlib.util
import io
from pathlib import Path
import subprocess
import tempfile
import unittest
import zipfile

spec = importlib.util.spec_from_file_location("public_audit", Path(__file__).resolve().parents[1] / "scripts/audit-public.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class PublicPrivacyTest(unittest.TestCase):
    def test_archived_private_file_and_secret_are_detected_without_echo(self):
        secret = "gh" + "p_" + "a" * 36
        output = io.BytesIO()
        with zipfile.ZipFile(output, "w") as archive:
            archive.writestr("plugin/keys/library.key", b"synthetic")
            archive.writestr("plugin/readme.txt", "private value " + secret)
        audit = module.Audit()
        audit.inspect("release.zip", output.getvalue())
        self.assertEqual({value["kind"] for value in audit.findings}, {"private-file", "github-token"})
        self.assertNotIn(secret, str(audit.findings))

    def test_exact_private_patterns_preserve_third_party_attribution(self):
        private = "private" + "@" + "person.invalid"
        audit = module.Audit([private])
        audit.inspect("THIRD_PARTY_NOTICES.txt", b"Copyright Third Party <third-party@example.org>")
        self.assertEqual(audit.findings, [])
        audit.inspect("README.md", private.encode())
        self.assertEqual(audit.findings[0]["kind"], "private-pattern")
        self.assertNotIn(private, str(audit.findings))

    def test_nested_archive_cannot_hide_private_data(self):
        inner = io.BytesIO()
        with zipfile.ZipFile(inner, "w") as archive:
            archive.writestr("plugin/.env", "synthetic test")
        outer = io.BytesIO()
        with zipfile.ZipFile(outer, "w") as archive:
            archive.writestr("archive.zip", inner.getvalue())
        audit = module.Audit()
        audit.inspect("release.zip", outer.getvalue())
        self.assertEqual(audit.findings[0]["kind"], "private-file")

    def test_removed_file_is_still_detected_in_history_and_identities_checked(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            run = lambda *args, **kwargs: subprocess.run(["git", *args], cwd=root, check=True, capture_output=True, **kwargs)
            run("init", "-b", "main")
            run("config", "user.name", module.PROJECT_NAME)
            run("config", "user.email", module.PROJECT_EMAIL)
            (root / "note.txt").write_text("private-" + "fixture-marker")
            run("add", "note.txt")
            run("-c", "commit.gpgsign=false", "commit", "-m", "fixture")
            run("rm", "note.txt")
            run("-c", "commit.gpgsign=false", "commit", "-m", "delete fixture")
            audit = module.Audit(["private-" + "fixture-marker"])
            audit.history(root, "HEAD")
            self.assertEqual(audit.counts["commits"], 2)
            self.assertTrue(any(value["kind"] == "private-pattern" for value in audit.findings))
            self.assertFalse(any(value["kind"] == "commit-identity" for value in audit.findings))
            run("config", "user.email", "user@" + "person.invalid")
            run("-c", "commit.gpgsign=false", "commit", "--allow-empty", "-m", "identity fixture")
            audit = module.Audit()
            audit.history(root, "HEAD")
            self.assertTrue(any(value["kind"] == "commit-identity" for value in audit.findings))


if __name__ == "__main__":
    unittest.main()

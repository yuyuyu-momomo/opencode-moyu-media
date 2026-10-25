"""Build a small portable ZIP with prebuilt code and no npm dependencies."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import json

root = Path(__file__).resolve().parent.parent
version = json.loads((root / "package.json").read_text(encoding="utf-8"))["version"]
destination = root / "releases" / f"opencode-moyu-media-v{version}.zip"
destination.parent.mkdir(exist_ok=True)
files = ["dist/tui.js", "dist/tui-v2.js", "dist/server.js", "dist/server-v2.js", "dist/install.mjs", "books/夜班便利店.txt", "install.sh", "install.cmd", "README.md", "TERMS.md", "LICENSE", "THIRD_PARTY_NOTICES.txt", "QUICKSTART.txt", "docs/ARCHITECTURE.md", "docs/MUSIC.md"]
with ZipFile(destination, "w", ZIP_DEFLATED) as archive:
    for name in files:
        archive.write(root / name, "opencode-moyu-media/" + name)
with ZipFile(destination) as archive:
    assert archive.testzip() is None
    assert len(archive.namelist()) == len(files)
print(f"{destination} ({destination.stat().st_size:,} bytes)")

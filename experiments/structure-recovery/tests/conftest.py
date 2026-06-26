import sys
from pathlib import Path

# Ensure the tests/ directory is on sys.path so sibling test-helper modules
# (e.g. gitfixture) are importable even when tests/__init__.py exists.
sys.path.insert(0, str(Path(__file__).parent))

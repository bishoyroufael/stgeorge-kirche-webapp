import sys
from pathlib import Path

# Path required for linking site-packages.
site_packages = Path('../').absolute().joinpath(".local/lib/python3.11/site-packages")
sys.path.append(str(site_packages))
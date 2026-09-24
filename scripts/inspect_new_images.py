import os
import shutil
from PIL import Image

downloads = [
    r"C:\Users\MOAZZAM\Downloads\ChatGPT Image Sep 24, 2026, 12_19_31 PM.png",
    r"C:\Users\MOAZZAM\Downloads\ChatGPT Image Sep 24, 2026, 12_18_37 PM.png",
    r"C:\Users\MOAZZAM\Downloads\ChatGPT Image Sep 24, 2026, 12_17_53 PM.png",
    r"C:\Users\MOAZZAM\Downloads\ChatGPT Image Sep 24, 2026, 12_17_13 PM.png",
    r"C:\Users\MOAZZAM\Downloads\ChatGPT Image Sep 24, 2026, 12_15_22 PM.png"
]

bhayander_dir = r"c:\Users\MOAZZAM\coding\incinc_projects\new_interior_nextJs\public\images\projects\bhayander-residence"
bhayander_files = [
    "04_picture2.webp",
    "05_picture3.webp",
    "06_picture4.webp",
    "07_picture5.webp",
    "08_picture6.webp"
]

for idx, path in enumerate(downloads):
    exists = os.path.exists(path)
    print(f"File {idx+1}: {os.path.basename(path)} -> Exists: {exists}")
    if exists:
        with Image.open(path) as img:
            print(f"  Size: {img.size}, Format: {img.format}, Mode: {img.mode}")

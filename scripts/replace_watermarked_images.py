import os
from PIL import Image

mapping = [
    (r"C:\Users\MOAZZAM\Downloads\ChatGPT Image Sep 24, 2026, 12_15_22 PM.png", r"public/images/projects/bhayander-residence/04_picture2.webp"),
    (r"C:\Users\MOAZZAM\Downloads\ChatGPT Image Sep 24, 2026, 12_17_13 PM.png", r"public/images/projects/bhayander-residence/05_picture3.webp"),
    (r"C:\Users\MOAZZAM\Downloads\ChatGPT Image Sep 24, 2026, 12_17_53 PM.png", r"public/images/projects/bhayander-residence/06_picture4.webp"),
    (r"C:\Users\MOAZZAM\Downloads\ChatGPT Image Sep 24, 2026, 12_18_37 PM.png", r"public/images/projects/bhayander-residence/07_picture5.webp"),
    (r"C:\Users\MOAZZAM\Downloads\ChatGPT Image Sep 24, 2026, 12_19_31 PM.png", r"public/images/projects/bhayander-residence/08_picture6.webp"),
    (r"C:\Users\MOAZZAM\Downloads\ChatGPT Image Sep 24, 2026, 12_17_53 PM.png", r"public/images/homepage/hero_13_picture4.webp"),
]

for src, dst in mapping:
    print(f"Processing: {os.path.basename(src)} -> {dst}")
    with Image.open(src) as img:
        img = img.convert('RGB')
        # Save as webp with high quality
        img.save(dst, 'WEBP', quality=88, method=6)
    print(f"  Successfully saved {dst} (Size: {os.path.getsize(dst)} bytes)")

print("All watermarked images successfully replaced with clean versions!")

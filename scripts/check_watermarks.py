import os
from PIL import Image

def scan_images():
    base_dir = 'public/images'
    watermarked_files = []
    
    for root, dirs, files in os.walk(base_dir):
        for f in files:
            if f.lower().endswith(('.webp', '.jpg', '.jpeg', '.png')):
                filepath = os.path.join(root, f)
                try:
                    with Image.open(filepath) as img:
                        w, h = img.size
                        # Check top-right region (e.g. last 15% width, top 15% height)
                        # The AD logo is a solid black rounded rect with red and white
                        # Let's crop top-right
                        box = (int(w * 0.82), 0, w, int(h * 0.18))
                        crop = img.crop(box).convert('RGB')
                        pixels = list(crop.getdata())
                        # Count pure black / near black pixels
                        black_count = sum(1 for r, g, b in pixels if r < 15 and g < 15 and b < 15)
                        # Check if significant dark patch exists in top right corner
                        ratio = black_count / len(pixels)
                        if ratio > 0.15: # More than 15% solid black in top-right
                            watermarked_files.append((filepath, ratio))
                except Exception as e:
                    pass
                    
    print(f"Scanned images. Found {len(watermarked_files)} suspected images:")
    for f, r in watermarked_files:
        print(f" - {f} (black ratio: {r:.2f})")

if __name__ == '__main__':
    scan_images()

import os
from PIL import Image
import numpy as np

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

# Load and compute similarity
matches = {}

for dl_path in downloads:
    dl_img = Image.open(dl_path).convert('RGB')
    dl_w, dl_h = dl_img.size
    # crop bottom half
    dl_crop = dl_img.crop((0, int(dl_h * 0.4), dl_w, dl_h)).resize((200, 200))
    dl_arr = np.array(dl_crop, dtype=float)
    
    best_file = None
    best_diff = float('inf')
    
    for bf in bhayander_files:
        bf_path = os.path.join(bhayander_dir, bf)
        bf_img = Image.open(bf_path).convert('RGB')
        bf_w, bf_h = bf_img.size
        bf_crop = bf_img.crop((0, int(bf_h * 0.4), bf_w, bf_h)).resize((200, 200))
        bf_arr = np.array(bf_crop, dtype=float)
        
        diff = np.mean((dl_arr - bf_arr) ** 2)
        if diff < best_diff:
            best_diff = diff
            best_file = bf
            
    matches[os.path.basename(dl_path)] = (best_file, best_diff, dl_path)
    print(f"{os.path.basename(dl_path)} -> {best_file} (MSE: {best_diff:.2f})")

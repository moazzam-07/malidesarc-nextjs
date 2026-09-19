import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET_DIRS = ['app', 'components', 'lib']

patterns = {
    'SPACEWORA_spelling': re.compile(r'\bSPACEWORA\b', re.IGNORECASE),
    'PENTHOUSE_mentions': re.compile(r'\bpenthouse[s]?\b', re.IGNORECASE),
    'MALI_LEGACY': re.compile(r'\bmali(desarc)?\b', re.IGNORECASE),
    'YEARS_EXP_18': re.compile(r'\b18\+?\s*years?\b', re.IGNORECASE),
    'PROJECTS_250': re.compile(r'\b250\+?\s*projects?\b', re.IGNORECASE),
}

results = {k: [] for k in patterns}

for target_dir in TARGET_DIRS:
    dir_path = os.path.join(ROOT, target_dir)
    for root, _, files in os.walk(dir_path):
        for file in files:
            if not file.endswith(('.jsx', '.js', '.json', '.html', '.css', '.ts', '.tsx')):
                continue
            fpath = os.path.join(root, file)
            relpath = os.path.relpath(fpath, ROOT)
            try:
                with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
                    for line_no, line in enumerate(f, 1):
                        for name, pat in patterns.items():
                            matches = pat.findall(line)
                            if matches:
                                # filter out benign things like url domain spacewora.vercel.app or file path
                                results[name].append((relpath, line_no, line.strip()))
            except Exception as e:
                pass

print("=== AUDIT RESULTS ===")
for name, entries in results.items():
    print(f"\n--- {name} (Count: {len(entries)}) ---")
    for relpath, lno, line in entries[:15]:
        print(f"[{relpath}:{lno}] {line[:120]}")
    if len(entries) > 15:
        print(f"... and {len(entries) - 15} more.")


import os
import glob
from bs4 import BeautifulSoup

project_slugs = [
    'stratum',
    'bellisma',
    'dtdc',
    'hosteller',
    'eurogriptyres',
    'hotel-karl-residency',
    'baluwala-developers-sales-office',
    'baluwala-sample-flat',
    'auris-2103',
    'boss',
    'dgs-gurudarshan',
    'emerald-isle',
    'project-rudra',
    'taj-boutique-bandra',
    'vensco',
    'vora-skyline',
    'blue-grass-residency',
]

for slug in project_slugs:
    rel_path = f'{slug}/index.html'
    full_path = os.path.join('c:/Users/MOAZZAM/coding/incinc_projects/new_interior', rel_path)
    exists = os.path.exists(full_path)
    if exists:
        with open(full_path, 'r', encoding='utf-8', errors='ignore') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')
            title = soup.find('title')
            title_text = title.text.strip() if title else ''
            main = soup.find('main')
            main_classes = main.get('class', []) if main else []
            el_div = main.find(class_=lambda c: c and 'elementor-' in c and c != 'elementor-location-header') if main else None
            el_classes = el_div.get('class', []) if el_div else []
            print(f'{slug}: exists=True title="{title_text[:35]}" main={main_classes} el={el_classes}')
    else:
        print(f'{slug}: exists=False')


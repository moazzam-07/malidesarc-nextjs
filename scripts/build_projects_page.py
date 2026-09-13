import os
import sys
import re
from bs4 import BeautifulSoup

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from scripts.convert_to_jsx import node_to_jsx

def extract_project_data():
    with open('c:/Users/MOAZZAM/coding/incinc_projects/new_interior/our-project/index.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    cards = soup.find_all(class_='project-card')
    print('Found project cards:', len(cards))

    card_data = []
    category_map = {
        'Vora Skyline Project': 'commercial',
        'Stratum Project': 'commercial',
        'Hosteller Project': 'commercial',
        'Eurogrip Tyres Project': 'retail',
        'Baluwala Show Flat': 'show-flats',
        'Taj Boutique Bandra Project': 'hospitality',
        'DGS Gurudarshan Project': 'sales-office',
        'Codeword Boss': 'sales-office',
        'Baluwala Developer': 'sales-office',
        'Auris 2103 Project': 'residential',
        'Bellissima Project': 'sales-office',
        'Vensco Project': 'show-flats',
        'Rudra Project': 'sales-office',
        'Hotel Karl': 'hospitality',
        'DTDC': 'commercial',
        'Emerald Isle Project': 'residential',
        'Blue Grass Residency Project': 'residential',
    }

    for c in cards:
        title_el = c.find(['h2', 'h3', 'h4', 'span'])
        title = title_el.text.strip() if title_el else ''
        category = category_map.get(title, 'commercial')
        
        # also inspect links inside card and update to Next.js routes
        for a in c.find_all('a'):
            href = a.get('href', '')
            if 'project-category/commercial' in href or 'vora-skyline' in href:
                a['href'] = '/vora-skyline/'
            elif 'stratum' in href:
                a['href'] = '/stratum/'
            elif 'hosteller' in href:
                a['href'] = '/hosteller/'
            elif 'eurogrip' in href:
                a['href'] = '/eurogriptyres/'
            elif 'baluwala-sample-flat' in href or 'baluwala-show-flat' in href:
                a['href'] = '/baluwala-sample-flat/'
            elif 'taj-boutique' in href:
                a['href'] = '/taj-boutique-bandra/'
            elif 'dgs-gurudarshan' in href:
                a['href'] = '/dgs-gurudarshan/'
            elif 'boss' in href:
                a['href'] = '/boss/'
            elif 'baluwala-developer' in href:
                a['href'] = '/baluwala-developers-sales-office/'
            elif 'auris' in href:
                a['href'] = '/auris-2103/'
            elif 'bellisma' in href or 'bellissima' in href:
                a['href'] = '/bellisma/'
            elif 'vensco' in href:
                a['href'] = '/vensco/'
            elif 'rudra' in href:
                a['href'] = '/project-rudra/'
            elif 'hotel-karl' in href:
                a['href'] = '/hotel-karl-residency/'
            elif 'dtdc' in href:
                a['href'] = '/dtdc/'
            elif 'emerald-isle' in href:
                a['href'] = '/emerald-isle/'
            elif 'blue-grass' in href:
                a['href'] = '/blue-grass-residency/'

        jsx = node_to_jsx(c)
        card_data.append((title, category, jsx))

    return card_data

if __name__ == '__main__':
    data = extract_project_data()
    for title, cat, _ in data:
        print(f'{title} -> {cat}')


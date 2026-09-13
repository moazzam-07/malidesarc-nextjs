import os
import glob
from bs4 import BeautifulSoup

pages = [
    ('our-services', 'our-services/index.html'),
    ('about', 'about/index.html'),
    ('contact', 'contact/index.html'),
    ('timeline', 'timeline/index.html'),
    ('teams', 'teams/index.html'),
    ('privacy-policy', 'privacy-policy/index.html'),
    ('commercial-interior-design', 'commercial-interior-design/index.html'),
    ('hospitality-interior-design', 'hospitality-interior-design/index.html'),
    ('residential-landing-page', 'residential-landing-page/index.html'),
    ('thank-you', 'thank-you/index.html'),
]

for name, rel_path in pages:
    full_path = os.path.join('c:/Users/MOAZZAM/coding/incinc_projects/new_interior', rel_path)
    if os.path.exists(full_path):
        with open(full_path, 'r', encoding='utf-8', errors='ignore') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')
            title = soup.find('title')
            title_text = title.text.strip() if title else ''
            main = soup.find('main')
            main_classes = main.get('class', []) if main else []
            elementor_div = main.find(class_=lambda c: c and 'elementor-' in c and c != 'elementor-location-header') if main else None
            el_classes = elementor_div.get('class', []) if elementor_div else []
            # check what CSS links exist
            css_links = [l.get('href') for l in soup.find_all('link', rel='stylesheet') if 'post-' in l.get('href', '')]
            print(f'{name}: title="{title_text[:40]}" main={main_classes} el={el_classes} post_css={css_links}')


import os
import sys
import re
from bs4 import BeautifulSoup

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from scripts.convert_to_jsx import node_to_jsx

PAGES_TO_GENERATE = [
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
    # Projects
    ('stratum', 'stratum/index.html'),
    ('bellisma', 'bellisma/index.html'),
    ('dtdc', 'dtdc/index.html'),
    ('hosteller', 'hosteller/index.html'),
    ('eurogriptyres', 'eurogriptyres/index.html'),
    ('hotel-karl-residency', 'hotel-karl-residency/index.html'),
    ('baluwala-developers-sales-office', 'baluwala-developers-sales-office/index.html'),
    ('baluwala-sample-flat', 'baluwala-sample-flat/index.html'),
    ('auris-2103', 'auris-2103/index.html'),
    ('boss', 'boss/index.html'),
    ('dgs-gurudarshan', 'dgs-gurudarshan/index.html'),
    ('emerald-isle', 'emerald-isle/index.html'),
    ('project-rudra', 'project-rudra/index.html'),
    ('taj-boutique-bandra', 'taj-boutique-bandra/index.html'),
    ('vensco', 'vensco/index.html'),
    ('vora-skyline', 'vora-skyline/index.html'),
    ('blue-grass-residency', 'blue-grass-residency/index.html'),
]

def generate_page(route_name, html_rel_path):
    src_path = os.path.join('c:/Users/MOAZZAM/coding/incinc_projects/new_interior', html_rel_path)
    if not os.path.exists(src_path):
        print(f'Source not found: {src_path}')
        return

    with open(src_path, 'r', encoding='utf-8', errors='ignore') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    # Get title
    title = soup.find('title')
    title_text = title.text.strip() if title else f'{route_name.replace("-", " ").title()} | MaliDesarc'
    title_text = title_text.replace('"', '\\"').replace('\n', ' ')

    # Meta description
    meta_desc = soup.find('meta', attrs={'name': 'description'})
    desc_text = meta_desc.get('content', '') if meta_desc else 'MaliDesarc turnkey interior design and execution in Mumbai.'
    desc_text = desc_text.replace('"', '\\"').replace('\n', ' ')

    # Collect page-specific post CSS links
    css_links = []
    for l in soup.find_all('link', rel='stylesheet'):
        href = l.get('href', '')
        if 'post-' in href:
            clean_href = href.replace('../', '').lstrip('/')
            if not clean_href.startswith('/'):
                clean_href = '/' + clean_href
            css_links.append(clean_href)

    # Get main element
    main = soup.find('main')
    if not main:
        # Fallback to body content excluding header and footer
        main = soup.find('body')

    # Exclude header and footer from main if present
    for h in main.find_all(['header', 'footer']):
        if 'elementor-location-header' in h.get('class', []) or 'elementor-location-footer' in h.get('class', []):
            h.decompose()
    for pop in main.find_all('div', class_='elementor-location-popup'):
        pop.decompose()
    for fl in main.find_all('div', class_='elementor-location-floating_buttons'):
        fl.decompose()

    # Convert to JSX
    main_jsx = node_to_jsx(main)

    # Build page file content
    link_tags = '\n'.join([f'      <link rel="stylesheet" href="{c}" />' for c in css_links])

    code = f"""import React from 'react';
import Link from 'next/link';

export const metadata = {{
  title: "{title_text}",
  description: "{desc_text}",
}};

export default function {route_name.replace('-', '_').title().replace('_', '')}Page() {{
  return (
    <>
{link_tags}
{main_jsx}
    </>
  );
}}
"""
    dest_dir = os.path.join('app', route_name)
    os.makedirs(dest_dir, exist_ok=True)
    dest_file = os.path.join(dest_dir, 'page.jsx')
    with open(dest_file, 'w', encoding='utf-8') as f:
        f.write(code)
    print(f'Generated {dest_file}')

def main():
    for route, rel_path in PAGES_TO_GENERATE:
        generate_page(route, rel_path)

if __name__ == '__main__':
    main()


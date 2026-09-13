import os
import sys
import re
from bs4 import BeautifulSoup
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from scripts.convert_to_jsx import node_to_jsx

def generate_footer():
    with open('c:/Users/MOAZZAM/coding/incinc_projects/new_interior/index.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    footer = soup.find('footer', class_='elementor-location-footer')
    jsx = node_to_jsx(footer)

    code = f"""import React from 'react';
import Link from 'next/link';

export default function Footer() {{
  return (
{jsx}
  );
}}
"""
    with open('components/Footer.jsx', 'w', encoding='utf-8') as f:
        f.write(code)
    print('Generated components/Footer.jsx')

def generate_whatsapp():
    with open('c:/Users/MOAZZAM/coding/incinc_projects/new_interior/index.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    floating = soup.find('div', class_='elementor-location-floating_buttons')
    jsx = node_to_jsx(floating)

    code = f"""import React from 'react';

export default function WhatsAppButton() {{
  return (
{jsx}
  );
}}
"""
    with open('components/WhatsAppButton.jsx', 'w', encoding='utf-8') as f:
        f.write(code)
    print('Generated components/WhatsAppButton.jsx')

if __name__ == '__main__':
    generate_footer()
    generate_whatsapp()


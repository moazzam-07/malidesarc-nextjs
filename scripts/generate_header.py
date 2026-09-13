import os
import sys
import re
from bs4 import BeautifulSoup
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from scripts.convert_to_jsx import node_to_jsx

def generate_header():
    with open('c:/Users/MOAZZAM/coding/incinc_projects/new_interior/index.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    header = soup.find('header', class_='elementor-location-header')
    jsx = node_to_jsx(header)

    # 1. Add 'scrolled' class conditionally
    jsx = jsx.replace(
        'className="elementor-element elementor-element-a2436b7 dynamic-header e-con-full e-flex e-con e-parent"',
        'className={`elementor-element elementor-element-a2436b7 dynamic-header e-con-full e-flex e-con e-parent ${isScrolled ? "scrolled" : ""}`}'
    )

    # 2. Wire up hamburger button click to openMenu
    # Look for hamburger button anchor
    hamburger_orig = '<a className="elementor-icon" href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6Ijc5MDMiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D">'
    hamburger_new = '<button type="button" aria-label="Open Menu" onClick={openMenu} className="elementor-icon" style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>'
    if hamburger_orig in jsx:
        jsx = jsx.replace(hamburger_orig, hamburger_new)
        # also close tag </a> to </button>
        # find the svg closing tag and next </a>
        jsx = re.sub(r'(<button type="button" aria-label="Open Menu" onClick=\{openMenu\}[\s\S]*?</svg>\s*)</a>', r'\1</button>', jsx)

    header_wrapper_start = """'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMobileMenu } from './MobileMenuContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openMenu } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
"""
    header_wrapper_end = """
  );
}
"""
    code = header_wrapper_start + jsx + header_wrapper_end
    os.makedirs('components', exist_ok=True)
    with open('components/Header.jsx', 'w', encoding='utf-8') as f:
        f.write(code)
    print('Generated components/Header.jsx')

if __name__ == '__main__':
    generate_header()

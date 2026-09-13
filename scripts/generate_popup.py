import os
import sys
import re
from bs4 import BeautifulSoup
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from scripts.convert_to_jsx import node_to_jsx

def generate_popup():
    with open('c:/Users/MOAZZAM/coding/incinc_projects/new_interior/index.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    popup = soup.find('div', class_='elementor-location-popup')
    jsx = node_to_jsx(popup)

    # Wrap the popup inside a fixed dialog overlay when isOpen is true
    code = """'use client';

import React from 'react';
import Link from 'next/link';
import { useMobileMenu } from './MobileMenuContext';

export default function MobileMenuPopup() {
  const { isOpen, closeMenu } = useMobileMenu();

  if (!isOpen) return null;

  return (
    <div 
      className="dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-popup-modal"
      id="elementor-popup-modal-7903"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeMenu();
        }
      }}
    >
      <div className="dialog-widget-content dialog-lightbox-widget-content" style={{ position: 'relative', width: '100%', maxWidth: '100%', minHeight: '100vh', display: 'flex' }}>
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
          style={{
            position: 'fixed',
            top: '25px',
            right: '25px',
            zIndex: 100000,
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#ffffff',
            fontSize: '24px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
        >
          &times;
        </button>
        <div className="dialog-message dialog-lightbox-message" style={{ width: '100%' }}>
""" + jsx + """
        </div>
      </div>
    </div>
  );
}
"""
    with open('components/MobileMenuPopup.jsx', 'w', encoding='utf-8') as f:
        f.write(code)
    print('Generated components/MobileMenuPopup.jsx')

if __name__ == '__main__':
    generate_popup()


'use client';

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
        flexDirection: 'column',
        backgroundColor: '#0A0A0A',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeMenu();
        }
      }}
    >
      {/* Sleek Top Bar (Logo on Left, Close on Right) */}
      <div 
        style={{ 
          width: '100%', 
          height: '64px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '0 20px',
          borderBottom: '1px solid rgba(244, 198, 0, 0.18)',
          backgroundColor: '#0A0A0A',
          flexShrink: 0,
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}
      >
        <Link href="/" onClick={closeMenu} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
          <img 
            src="/spacewora-logo-white-text.svg" 
            alt="SPACEWORA Design Studio" 
            style={{ 
              height: '36px', 
              width: 'auto', 
              maxWidth: '180px', 
              objectFit: 'contain', 
              display: 'block' 
            }} 
          />
        </Link>

        {/* Close Button */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(244, 198, 0, 0.4)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#F4C600',
            fontSize: '24px',
            lineHeight: 1,
            transition: 'all 0.25s ease',
            padding: 0
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(244, 198, 0, 0.25)';
            e.currentTarget.style.borderColor = '#F4C600';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
            e.currentTarget.style.borderColor = 'rgba(244, 198, 0, 0.4)';
            e.currentTarget.style.color = '#F4C600';
          }}
        >
          &times;
        </button>
      </div>

      {/* Drawer Content */}
      <div 
        style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '36px 24px 44px 24px',
          width: '100%',
          maxWidth: '440px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        {/* Navigation Menu */}
        <nav aria-label="Mobile Navigation" style={{ width: '100%', marginBottom: '28px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            
            <li>
              <Link 
                href="/" 
                onClick={closeMenu}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  color: '#FFFFFF',
                  fontFamily: '"Bai Jamjuree", sans-serif',
                  fontSize: '21px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.5px',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F4C600'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              >
                Home
              </Link>
            </li>

            <li>
              <Link 
                href="/our-project/" 
                onClick={closeMenu}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  color: '#F4C600',
                  fontFamily: '"Bai Jamjuree", sans-serif',
                  fontSize: '21px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.5px',
                  transition: 'color 0.2s ease'
                }}
              >
                Our Projects
              </Link>
            </li>

            <li>
              <Link 
                href="/our-services/" 
                onClick={closeMenu}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  color: '#FFFFFF',
                  fontFamily: '"Bai Jamjuree", sans-serif',
                  fontSize: '21px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.5px',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F4C600'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              >
                Our Services
              </Link>
            </li>

            <li>
              <Link 
                href="/about/" 
                onClick={closeMenu}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  color: '#FFFFFF',
                  fontFamily: '"Bai Jamjuree", sans-serif',
                  fontSize: '21px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.5px',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F4C600'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link 
                href="/contact/" 
                onClick={closeMenu}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  color: '#FFFFFF',
                  fontFamily: '"Bai Jamjuree", sans-serif',
                  fontSize: '21px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.5px',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F4C600'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              >
                Contact Us
              </Link>
            </li>

          </ul>
        </nav>

        {/* CTA Button */}
        <div style={{ width: '100%', maxWidth: '300px', marginBottom: '22px' }}>
          <Link 
            href="/contact/" 
            onClick={closeMenu}
            style={{
              display: 'block',
              textAlign: 'center',
              backgroundColor: '#F4C600',
              color: '#0A0A0A',
              fontFamily: '"Quicksand", sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              padding: '14px 28px',
              borderRadius: '30px',
              textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(244, 198, 0, 0.35)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F4C600';
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(244, 198, 0, 0.35)';
            }}
          >
            Book Consultation
          </Link>
        </div>

        {/* Instagram Follow */}
        <div style={{ marginBottom: '28px' }}>
          <a 
            href="https://www.instagram.com/spacwora" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#F4C600',
              textDecoration: 'none',
              fontSize: '14.5px',
              fontFamily: '"Quicksand", sans-serif',
              fontWeight: 600,
              transition: 'color 0.2s ease'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Follow @spacwora
          </a>
        </div>

        {/* Copyright */}
        <div>
          <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px', fontFamily: '"Quicksand", sans-serif', lineHeight: 1.6, display: 'block' }}>
            Copyright &copy; 2026 SPACEWORA Design Studio.
            <br />
            All rights reserved.
          </span>
        </div>

      </div>
    </div>
  );
}

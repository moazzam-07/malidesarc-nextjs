import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer 
      className="spacewora-footer"
      style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        padding: '80px 24px 0 24px',
        borderTop: '1px solid rgba(244, 198, 0, 0.2)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div 
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '48px',
          paddingBottom: '60px'
        }}
      >
        {/* Col 1: Brand Info */}
        <div>
          <div style={{ paddingBottom: '16px' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              <img 
                src="/spacewora-logo-white-text.svg" 
                alt="SPACEWORA Design Studio" 
                style={{ 
                  height: '52px', 
                  width: 'auto', 
                  maxWidth: '220px', 
                  objectFit: 'contain', 
                  display: 'block' 
                }} 
              />
            </Link>
          </div>
          
          <p style={{ fontFamily: '"Quicksand", sans-serif', fontSize: '13px', fontWeight: 600, color: '#F4C600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', lineHeight: 1.5 }}>
            Luxury Interior Architecture • Turnkey Projects • Landscape Design
          </p>

          <p style={{ color: '#CCCCCC', fontSize: '14.5px', lineHeight: 1.7, fontFamily: '"Quicksand", sans-serif', margin: 0 }}>
            Creating timeless spaces through thoughtful design, refined craftsmanship, and meaningful experiences.
          </p>

          <div style={{ marginTop: '18px' }}>
            <a 
              href="https://www.instagram.com/spacwora" 
              target="_blank" 
              rel="noopener noreferrer"
              className="spacewora-insta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(244, 198, 0, 0.4)',
                backgroundColor: 'rgba(244, 198, 0, 0.08)',
                color: '#F4C600',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 600,
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Follow @spacwora
            </a>
          </div>
        </div>

        {/* Col 2: Reach Us */}
        <div>
          <h4 
            style={{ 
              color: '#FFFFFF', 
              fontFamily: '"Bai Jamjuree", sans-serif', 
              fontSize: '20px', 
              fontWeight: 600,
              margin: '0 0 12px 0' 
            }}
          >
            Reach Us
          </h4>
          <div style={{ width: '40px', height: '2px', backgroundColor: '#F4C600', marginBottom: '20px' }} />
          
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>
              <a href="https://www.instagram.com/spacwora" target="_blank" rel="noopener noreferrer" style={{ color: '#E0E0E0', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', fontFamily: '"Quicksand", sans-serif', transition: 'color 0.2s ease' }} className="spacewora-footer-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram: @spacwora
              </a>
            </li>
            <li>
              <a href="tel:+918874135497" style={{ color: '#E0E0E0', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', fontFamily: '"Quicksand", sans-serif', transition: 'color 0.2s ease' }} className="spacewora-footer-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 88741 35497
              </a>
            </li>
            <li>
              <a href="https://wa.me/918874135497" target="_blank" rel="noopener noreferrer" style={{ color: '#E0E0E0', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', fontFamily: '"Quicksand", sans-serif', transition: 'color 0.2s ease' }} className="spacewora-footer-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp: +91 88741 35497
              </a>
            </li>
            <li>
              <a href="mailto:enquiary@spacwora.com" style={{ color: '#E0E0E0', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', fontFamily: '"Quicksand", sans-serif', transition: 'color 0.2s ease' }} className="spacewora-footer-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                enquiary@spacwora.com
              </a>
            </li>
            <li>
              <a href="mailto:sales@spacwora.com" style={{ color: '#E0E0E0', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', fontFamily: '"Quicksand", sans-serif', transition: 'color 0.2s ease' }} className="spacewora-footer-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                sales@spacwora.com
              </a>
            </li>
            <li style={{ color: '#BDBDBD', fontSize: '13.5px', fontFamily: '"Quicksand", sans-serif', display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Mon – Sat: 10:00 AM – 7:00 PM
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Links */}
        <div>
          <h4 
            style={{ 
              color: '#FFFFFF', 
              fontFamily: '"Bai Jamjuree", sans-serif', 
              fontSize: '20px', 
              fontWeight: 600,
              margin: '0 0 12px 0' 
            }}
          >
            Quick Links
          </h4>
          <div style={{ width: '40px', height: '2px', backgroundColor: '#F4C600', marginBottom: '20px' }} />

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Home', href: '/' },
              { label: 'Our Services', href: '/our-services/' },
              { label: 'Our Projects', href: '/our-project/' },
              { label: 'About Us', href: '/about/' },
              { label: 'Contact Us', href: '/contact/' },
            ].map(item => (
              <li key={item.label}>
                <Link 
                  href={item.href}
                  className="spacewora-footer-link"
                  style={{ color: '#E0E0E0', textDecoration: 'none', fontSize: '14.5px', fontFamily: '"Quicksand", sans-serif', transition: 'color 0.2s ease' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Our Services */}
        <div>
          <h4 
            style={{ 
              color: '#FFFFFF', 
              fontFamily: '"Bai Jamjuree", sans-serif', 
              fontSize: '20px', 
              fontWeight: 600,
              margin: '0 0 12px 0' 
            }}
          >
            Our Services
          </h4>
          <div style={{ width: '40px', height: '2px', backgroundColor: '#F4C600', marginBottom: '20px' }} />

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Residential', href: '/our-services#residential' },
              { label: 'Commercial', href: '/our-services#commercial' },
              { label: 'Hospitality', href: '/our-services#hospitality' },
              { label: 'Penthouse', href: '/our-services#penthouse' },
              { label: 'Turnkey Project', href: '/our-services#turnkey-project' },
              { label: 'Exhibition', href: '/our-services#exhibition' },
            ].map(item => (
              <li key={item.label}>
                <Link 
                  href={item.href}
                  className="spacewora-footer-link"
                  style={{ color: '#E0E0E0', textDecoration: 'none', fontSize: '14.5px', fontFamily: '"Quicksand", sans-serif', transition: 'color 0.2s ease' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div 
        style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
          padding: '24px 20px',
          textAlign: 'center' 
        }}
      >
        <p style={{ color: '#888888', fontSize: '14px', margin: 0, fontFamily: '"Quicksand", sans-serif' }}>
          © 2026 SPACEWORA Design Studio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

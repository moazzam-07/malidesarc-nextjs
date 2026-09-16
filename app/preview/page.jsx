'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PreviewPage() {
  const [deviceMode, setDeviceMode] = useState('desktop'); // desktop, tablet, mobile

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', color: '#111111', fontFamily: '"Quicksand", sans-serif', paddingBottom: '80px' }}>
      {/* Top Banner & Context */}
      <div style={{ borderBottom: '1px solid #E5E7EB', padding: '32px 24px 24px 24px', backgroundColor: '#FFFFFF', marginBottom: '36px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={{ color: '#F4C600', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
                SPACEWORA Design Studio &bull; Preview Mode
              </span>
              <h1 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#111111', marginTop: '6px' }}>
                Hero Section & Studio Showcase
              </h1>
            </div>

            {/* Quick Action Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <Link 
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#0A0A0A',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  padding: '10px 22px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <span>Visit Live Home</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </Link>

              <Link 
                href="/our-project/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FFFFFF',
                  color: '#111111',
                  border: '1px solid #D1D5DB',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  padding: '10px 20px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <span>Projects Grid</span>
              </Link>

              <Link 
                href="/contact-us/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FFFFFF',
                  color: '#D49B00',
                  border: '1px solid #F4C600',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  padding: '10px 20px',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <span>Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Device Viewport Toggle & Thumbnail Showcase */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '13px', color: '#555555', fontWeight: 600 }}>Viewport Frame:</span>
            <button
              onClick={() => setDeviceMode('desktop')}
              style={{
                background: deviceMode === 'desktop' ? '#F4C600' : '#FFFFFF',
                color: deviceMode === 'desktop' ? '#0A0A0A' : '#333333',
                border: deviceMode === 'desktop' ? '1px solid #F4C600' : '1px solid #D1D5DB',
                borderRadius: '8px',
                padding: '6px 14px',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: deviceMode === 'desktop' ? '0 2px 8px rgba(244, 198, 0, 0.3)' : 'none'
              }}
            >
              Desktop (1200px)
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              style={{
                background: deviceMode === 'tablet' ? '#F4C600' : '#FFFFFF',
                color: deviceMode === 'tablet' ? '#0A0A0A' : '#333333',
                border: deviceMode === 'tablet' ? '1px solid #F4C600' : '1px solid #D1D5DB',
                borderRadius: '8px',
                padding: '6px 14px',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: deviceMode === 'tablet' ? '0 2px 8px rgba(244, 198, 0, 0.3)' : 'none'
              }}
            >
              Tablet (768px)
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              style={{
                background: deviceMode === 'mobile' ? '#F4C600' : '#FFFFFF',
                color: deviceMode === 'mobile' ? '#0A0A0A' : '#333333',
                border: deviceMode === 'mobile' ? '1px solid #F4C600' : '1px solid #D1D5DB',
                borderRadius: '8px',
                padding: '6px 14px',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: deviceMode === 'mobile' ? '0 2px 8px rgba(244, 198, 0, 0.3)' : 'none'
              }}
            >
              Mobile (420px)
            </button>
          </div>

          <div style={{ fontSize: '12px', color: '#666666' }}>
            Social Share Thumbnail &bull; High Resolution 1200&times;630px
          </div>
        </div>

        {/* Thumbnail Card Mockup Frame */}
        <div 
          style={{
            maxWidth: deviceMode === 'desktop' ? '1200px' : deviceMode === 'tablet' ? '768px' : '420px',
            margin: '0 auto',
            transition: 'max-width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E5E7EB',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), 0 0 30px rgba(244, 198, 0, 0.1)',
            overflow: 'hidden'
          }}
        >
          {/* Browser Top Window Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px', backgroundColor: '#181818', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#0A0A0A', padding: '4px 16px', borderRadius: '6px', fontSize: '12px', color: '#AAA', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span>https://spacewora.vercel.app/</span>
            </div>
            <div style={{ fontSize: '11px', color: '#888', fontWeight: 600 }}>
              HERO THUMBNAIL
            </div>
          </div>

          {/* Hero Thumbnail Image Container */}
          <div style={{ position: 'relative', width: '100%', overflow: 'hidden', backgroundColor: '#000000' }}>
            <a href="/" title="Click to view live home page" style={{ display: 'block', textDecoration: 'none' }}>
              <img 
                src="/og-hero-thumbnail.jpg" 
                alt="SPACEWORA Design Studio Hero Section Thumbnail"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.4s ease, filter 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.015)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </a>
          </div>

          {/* Card Footer with quick jump */}
          <div style={{ padding: '16px 24px', backgroundColor: '#141414', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/favicon.svg" alt="SPACEWORA Favicon" style={{ width: '22px', height: '22px' }} />
              <span style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 600 }}>
                SPACEWORA Design Studio — Hero Thumbnail Active
              </span>
            </div>
            <a 
              href="/og-hero-thumbnail.jpg" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                fontSize: '12px',
                color: '#F4C600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 700
              }}
            >
              <span>Open Full-Res Thumbnail</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ color: '#F4C600', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
              Brand Identity
            </div>
            <h3 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '18px', marginBottom: '10px', color: '#111111' }}>
              Golden &bull; White &bull; Deep Black
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#555555' }}>
              Sophisticated architectural palette: Golden (#F4C600) accents, Pure White (#FFFFFF) canvas, and Rich Obsidian (#0A0A0A) typography and elements.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ color: '#F4C600', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
              Social & OpenGraph
            </div>
            <h3 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '18px', marginBottom: '10px', color: '#111111' }}>
              Auto Thumbnail Card
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#555555' }}>
              Sharing links on WhatsApp, Twitter/X, LinkedIn, and Facebook automatically renders the 1200&times;630 hero thumbnail preview card.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ color: '#F4C600', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
              Favicon Assets
            </div>
            <h3 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '18px', marginBottom: '10px', color: '#111111' }}>
              Multi-Format SVG + ICO
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#555555' }}>
              Golden ribbon "S" emblem with marble pillar deployed as SVG vector, multi-resolution ICO (16/32/48), and Apple Touch Icon (180&times;180).
            </p>
          </div>
        </div>

        {/* Site Directory Links */}
        <div style={{ marginTop: '36px', padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)', textAlign: 'center' }}>
          <h4 style={{ color: '#111111', fontSize: '15px', fontWeight: 700, marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Quick Explore Studio Routes
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {[
              { label: 'Home Page', href: '/' },
              { label: 'Our Services', href: '/our-services/' },
              { label: 'Our Projects', href: '/our-project/' },
              { label: 'About Studio', href: '/about-us/' },
              { label: 'Contact Us', href: '/contact-us/' },
              { label: 'Residential Landing', href: '/residential-landing-page/' }
            ].map((route) => (
              <Link
                key={route.href}
                href={route.href}
                style={{
                  color: '#333333',
                  backgroundColor: '#F3F4F6',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  textDecoration: 'none',
                  border: '1px solid #E5E7EB',
                  fontWeight: 600,
                  transition: 'all 0.2s ease'
                }}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

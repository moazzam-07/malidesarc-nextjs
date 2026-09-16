import React from 'react';
import Link from 'next/link';
import HeroSlideshow from './HeroSlideshow';

const marqueeItems = [
  'Luxury Interior Architecture',
  'Bespoke Residences',
  'Turnkey Interior Projects',
  'Premium Commercial Spaces',
  'Hospitality Design',
  'Landscape & Outdoor Living',
  'Architectural Space Planning',
  'Exceptional Craftsmanship'
];

export default function HeroSection() {
  return (
    <div
      className="elementor-element elementor-element-3d03374 e-con-full spacewora-hero e-flex e-con e-parent"
      data-e-type="container"
      data-element_type="container"
      data-id="3d03374"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 20px 100px 20px',
        overflow: 'hidden'
      }}
    >
      <HeroSlideshow />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Small Heading / Kicker */}
        <span
          style={{
            color: '#F4C600',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: 'clamp(12px, 0.8rem + 0.15vw, 15px)',
            fontWeight: 600,
            display: 'inline-block',
            marginBottom: '18px',
            padding: '6px 18px',
            borderRadius: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(244, 198, 0, 0.3)',
            backgroundColor: 'rgba(0, 0, 0, 0.28)',
            border: '1px solid rgba(244, 198, 0, 0.45)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        >
          Luxury Interior Architecture & Design Studio
        </span>

        {/* Main Heading */}
        <h1
          style={{
            fontFamily: '"Bai Jamjuree", sans-serif',
            color: '#FFFFFF',
            fontSize: 'clamp(2.2rem, 1.8rem + 2.4vw, 4.4rem)',
            fontWeight: 600,
            lineHeight: 1.2,
            margin: '0 auto 20px auto',
            textShadow: '0 3px 25px rgba(0, 0, 0, 0.9), 0 1px 5px rgba(0, 0, 0, 0.95)'
          }}
        >
          Designing Timeless Spaces That Feel As Extraordinary As They Look.
        </h1>

        {/* Narrative Paragraph */}
        <p
          style={{
            fontFamily: '"Quicksand", sans-serif',
            color: '#FFFFFF',
            fontSize: 'clamp(1rem, 0.95rem + 0.3vw, 1.22rem)',
            lineHeight: 1.7,
            maxWidth: '860px',
            margin: '0 auto 34px auto',
            textShadow: '0 2px 14px rgba(0, 0, 0, 0.95), 0 1px 3px rgba(0, 0, 0, 0.9)'
          }}
        >
          Every space has the power to inspire, comfort, and tell a story. At <strong>SPACEWORA Design Studio</strong>, we create luxury interiors and architectural experiences that reflect your personality, celebrate your lifestyle, and elevate the way you live.
        </p>

        {/* Primary & Secondary Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '20px'
          }}
        >
          <Link href="/contact/" className="spacewora-btn-primary">
            Book Free Consultation
          </Link>

          <Link href="/our-project/" className="spacewora-btn-secondary">
            Explore Our Projects
          </Link>
        </div>
      </div>

      {/* Marquee Bar at Bottom of Hero */}
      <div
        className="elementor-element elementor-element-1e013df e-con-full e-flex e-con e-child"
        data-e-type="container"
        data-element_type="container"
        data-id="1e013df"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          zIndex: 10
        }}
      >
        <div className="elementor-element elementor-element-9c2bcb0 elementor-widget elementor-widget-html" style={{ width: '100%' }}>
          <div className="spacewora-marquee">
            <div className="spacewora-marquee-track">
              {/* Set 1 */}
              {marqueeItems.map((item, idx) => (
                <span key={`m1-${idx}`} className="spacewora-marquee-item">
                  <span className="spacewora-marquee-icon">✩</span>
                  {item}
                </span>
              ))}
              {/* Set 2 (Seamless loop) */}
              {marqueeItems.map((item, idx) => (
                <span key={`m2-${idx}`} aria-hidden="true" className="spacewora-marquee-item">
                  <span className="spacewora-marquee-icon">✩</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

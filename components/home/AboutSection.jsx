import React from 'react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <>
      <div 
        className="elementor-element elementor-element-2d632b7 e-flex e-con-boxed e-con e-parent" 
        data-e-type="container" 
        data-element_type="container" 
        data-id="2d632b7" 
        data-settings='{"background_background":"classic"}'
        style={{ padding: '90px 20px' }}
      >
        <div className="e-con-inner" style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          {/* Left Text Content */}
          <div className="elementor-element elementor-element-c99afc7 e-con-full e-flex e-con e-child" style={{ flex: '1 1 540px' }}>
            <span 
              style={{
                color: '#F4C600',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'inline-block',
                marginBottom: '14px'
              }}
            >
              ABOUT SPACEWORA
            </span>
            <div className="elementor-element elementor-element-60928c5 elementor-widget elementor-widget-heading">
              <h2 
                className="elementor-heading-title elementor-size-default"
                style={{
                  fontFamily: '"Bai Jamjuree", sans-serif',
                  fontSize: 'clamp(2rem, 1.6rem + 1.6vw, 3.2rem)',
                  fontWeight: 600,
                  lineHeight: 1.25,
                  color: '#111111',
                  marginBottom: '22px'
                }}
              >
                We Design More Than Interiors. <br />We Design The Way You Live.
              </h2>
            </div>
            <div 
              className="elementor-element elementor-element-dc15ec2 elementor-widget elementor-widget-text-editor"
              style={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#444444',
                marginBottom: '32px'
              }}
            >
              <p style={{ marginBottom: '16px' }}>
                Great design is never about expensive materials or beautiful furniture alone. It begins with understanding people—their dreams, routines, aspirations, and the emotions they want to experience every day.
              </p>
              <p style={{ marginBottom: '16px' }}>
                At <strong>SPACEWORA Design Studio</strong>, every project starts with listening. We believe every client deserves a space that reflects who they are, not just what is trending.
              </p>
              <p style={{ marginBottom: '16px' }}>
                With over 7 years of professional experience, we have transformed homes, offices, hospitality spaces, and commercial environments into timeless destinations where luxury meets functionality.
              </p>
              <p style={{ fontWeight: 600, color: '#111111', borderLeft: '3px solid #F4C600', paddingLeft: '16px' }}>
                Our philosophy is simple: Create spaces that remain beautiful long after trends have disappeared.
              </p>
            </div>
            <div className="elementor-element elementor-element-a6d9a61 e-grid e-con-full e-con e-child" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/about/" className="spacewora-btn-dark">
                ABOUT THE STUDIO
              </Link>
              <Link href="/contact/" className="spacewora-btn-light">
                START YOUR PROJECT
              </Link>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="elementor-element elementor-element-6e77d41 e-con-full e-flex e-con e-child" style={{ flex: '1 1 480px', position: 'relative' }}>
            <div 
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.14)',
                border: '1px solid rgba(244, 198, 0, 0.2)'
              }}
            >
              <img 
                alt="SPACEWORA Interior Architecture & Design Studio" 
                className="attachment-large size-large" 
                loading="lazy"
                src="/images/studio/spacwora-reception-main.webp" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Brand Statement Callout Quote */}
      <div 
        style={{
          backgroundColor: '#0A0A0A',
          borderTop: '1px solid rgba(244, 198, 0, 0.2)',
          borderBottom: '1px solid rgba(244, 198, 0, 0.2)',
          padding: '70px 20px',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <span 
            style={{
              color: '#F4C600',
              fontSize: '44px',
              lineHeight: 1,
              display: 'block',
              marginBottom: '10px',
              fontFamily: 'serif'
            }}
          >
            “
          </span>
          <blockquote 
            style={{
              fontFamily: '"Bai Jamjuree", sans-serif',
              fontSize: 'clamp(1.4rem, 1.2rem + 0.8vw, 2.2rem)',
              color: '#FFFFFF',
              fontWeight: 500,
              lineHeight: 1.5,
              margin: '0 auto 20px auto',
              fontStyle: 'italic'
            }}
          >
            Luxury is not created by decoration. Luxury is created through thoughtful design, meaningful details, and spaces that feel effortless every single day.
          </blockquote>
          <div 
            style={{
              width: '50px',
              height: '2px',
              backgroundColor: '#F4C600',
              margin: '0 auto 16px auto'
            }} 
          />
          <span 
            style={{
              color: '#F4C600',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '13px',
              fontWeight: 600
            }}
          >
            SPACEWORA DESIGN PHILOSOPHY
          </span>
        </div>
      </div>
    </>
  );
}

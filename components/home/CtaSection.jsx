import React from 'react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <div 
      className="elementor-element elementor-element-863cde3 e-con-full e-flex e-con e-parent" 
      data-e-type="container" 
      data-element_type="container" 
      data-id="863cde3"
      style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        padding: '90px 20px',
        textAlign: 'center',
        borderTop: '1px solid rgba(244, 198, 0, 0.2)'
      }}
    >
      <div 
        className="elementor-element elementor-element-7ac76ee e-con-full e-flex e-con e-child" 
        style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <span
          style={{
            color: '#F4C600',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '13px',
            fontWeight: 600,
            display: 'inline-block',
            marginBottom: '16px'
          }}
        >
          START YOUR JOURNEY
        </span>

        <h2 
          className="elementor-heading-title elementor-size-default"
          style={{
            fontFamily: '"Bai Jamjuree", sans-serif',
            fontSize: 'clamp(2.2rem, 1.8rem + 1.8vw, 3.8rem)',
            fontWeight: 500,
            color: '#FFFFFF',
            lineHeight: 1.25,
            marginBottom: '20px'
          }}
        >
          Let's Create A Space That Reflects Your Vision.
        </h2>

        <p 
          style={{
            fontFamily: '"Quicksand", sans-serif',
            fontSize: '16px',
            lineHeight: 1.7,
            color: '#CCCCCC',
            maxWidth: '720px',
            margin: '0 auto 34px auto'
          }}
        >
          Whether you're building your dream home, designing a luxury bungalow, renovating an office, or creating a hospitality destination, our team is ready to transform your ideas into timeless spaces.
        </p>

        <Link 
          href="/contact/" 
          className="spacewora-cta-btn"
        >
          Start Your Project Today
          <span style={{ fontSize: '18px' }}>→</span>
        </Link>
      </div>
    </div>
  );
}

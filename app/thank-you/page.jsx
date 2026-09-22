import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Thank You | SPACWORA Design Studio",
  description: "Thank you for reaching out to SPACWORA Design Studio. Our design leads will be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <main 
      style={{ 
        backgroundColor: '#FFFFFF', 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '160px 20px 100px 20px',
        textAlign: 'center'
      }}
    >
      <div 
        style={{ 
          maxWidth: '650px', 
          margin: '0 auto', 
          backgroundColor: '#0A0A0A', 
          borderRadius: '20px', 
          padding: 'clamp(40px, 6vw, 60px) clamp(24px, 5vw, 48px)',
          border: '1px solid rgba(244, 198, 0, 0.3)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
          color: '#FFFFFF'
        }}
      >
        <div 
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(244, 198, 0, 0.15)',
            border: '2px solid #F4C600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px auto'
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F4C600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <span 
          style={{
            color: '#F4C600',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            display: 'block',
            marginBottom: '10px'
          }}
        >
          INQUIRY RECEIVED
        </span>

        <h1 
          style={{
            fontFamily: '"Bai Jamjuree", sans-serif',
            fontSize: 'clamp(2rem, 1.8rem + 1.2vw, 2.8rem)',
            fontWeight: 600,
            color: '#FFFFFF',
            marginBottom: '16px',
            lineHeight: 1.2
          }}
        >
          Thank You For Contacting SPACE<span style={{ color: '#F4C600' }}>WORA</span>
        </h1>

        <p 
          style={{
            fontFamily: '"Quicksand", sans-serif',
            fontSize: '16px',
            lineHeight: 1.7,
            color: '#CCCCCC',
            marginBottom: '32px'
          }}
        >
          We have received your details. One of our principal design consultants will reach out to you within 24 hours to discuss your project scope and schedule an initial consultation.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              backgroundColor: '#F4C600',
              color: '#0A0A0A',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              padding: '12px 28px',
              borderRadius: '24px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.2s ease'
            }}
          >
            Return to Home
          </Link>
          <Link
            href="/our-project/"
            style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              padding: '12px 28px',
              borderRadius: '24px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.2s ease'
            }}
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </main>
  );
}

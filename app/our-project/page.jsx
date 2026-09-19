import React, { Suspense } from 'react';
import ProjectsFilterGrid from '@/components/projects/ProjectsFilterGrid';

export const metadata = {
  title: 'Our Architecture & Interior Projects | SPACWORA Design Studio',
  description: 'Explore our portfolio of luxury residential, commercial, and hospitality interior architecture projects across Mumbai.',
};

export default function OurProjectPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#111111' }}>
      {/* Hero Banner with Architectural Background */}
      <section 
        style={{
          position: 'relative',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundImage: "url('/images/homepage/hero_01_enscape_2023-06-14-01-34-23.webp')",
          backgroundPosition: 'center 35%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: '140px 24px 80px 24px',
          overflow: 'hidden'
        }}
      >
        {/* Film Overlay for Luxury Contrast */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.65) 0%, rgba(10, 10, 10, 0.40) 45%, rgba(10, 10, 10, 0.85) 100%)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            zIndex: 1
          }} 
        />

        {/* Hero Content */}
        <div 
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '860px',
            margin: '0 auto'
          }}
        >
          <span 
            style={{
              display: 'inline-block',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '3px',
              color: '#F4C600',
              textTransform: 'uppercase',
              marginBottom: '16px',
              padding: '6px 20px',
              borderRadius: '20px',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(244, 198, 0, 0.35)'
            }}
          >
            Authentic Studio Portfolio
          </span>

          <h1 
            style={{
              fontFamily: '"Bai Jamjuree", sans-serif',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: '0 0 18px 0',
              lineHeight: 1.15
            }}
          >
            Our <span style={{ color: '#F4C600' }}>Projects</span>
          </h1>

          <p 
            style={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              fontWeight: 500,
              color: '#E0E0E0',
              lineHeight: 1.7,
              margin: '0 auto',
              maxWidth: '720px'
            }}
          >
            Explore our authentic portfolio of turnkey interior architecture projects across Mumbai—from luxury residences and high-volume penthouses to commercial corporate offices and fine-dining hospitality.
          </p>
        </div>
      </section>

      {/* Interactive Category Filter and 4-Column Project Grid */}
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '60px', color: '#888', fontSize: '16px' }}>Loading projects...</div>}>
        <ProjectsFilterGrid />
      </Suspense>
    </div>
  );
}

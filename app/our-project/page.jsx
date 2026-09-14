import React, { Suspense } from 'react';
import ProjectsFilterGrid from '@/components/projects/ProjectsFilterGrid';

export const metadata = {
  title: 'Our Architecture & Interior Projects | SPACEWORA Design Studio',
  description: 'Explore our portfolio of luxury commercial, residential, hospitality, retail, and corporate interior architecture projects across Mumbai.',
};

export default function OurProjectPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      {/* Hero Banner with Architectural Background */}
      <section 
        style={{
          position: 'relative',
          minHeight: '62vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundImage: "url('/wp-content/uploads/2026/08/Hero-Banner-2.webp')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: '140px 24px 80px 24px'
        }}
      >
        {/* Dark Film Overlay for Luxury Contrast */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(10, 10, 10, 0.65)',
            backdropFilter: 'blur(1px)',
            zIndex: 1
          }} 
        />

        {/* Hero Content */}
        <div 
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '820px',
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
              marginBottom: '16px'
            }}
          >
            Portfolio & Showcase
          </span>

          <h1 
            style={{
              fontFamily: '"Bai Jamjuree", sans-serif',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: '0 0 20px 0',
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
              maxWidth: '680px'
            }}
          >
            Explore our diverse portfolio of interior architecture projects, where thoughtful design, refined detailing, and functional spaces come together to create timeless environments.
          </p>
        </div>
      </section>

      {/* Interactive Category Filter and 4-Column Project Grid */}
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '60px', color: '#666', fontSize: '16px' }}>Loading projects...</div>}>
        <ProjectsFilterGrid />
      </Suspense>
    </div>
  );
}

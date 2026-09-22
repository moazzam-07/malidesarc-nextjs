import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Residential Interior Design & Luxury Homes | SPACWORA',
  description:
    'Luxury residential interior design, custom villas, penthouses, and bespoke apartments in Mumbai by SPACWORA Design Studio. Thoughtfully crafted around the way you live.',
};

const RESIDENTIAL_PILLARS = [
  {
    title: 'Bespoke Master Suites & Wardrobes',
    desc: 'Custom fluted acoustic headboards, walk-in closets with integrated warm LED profile lighting, and concealed dresser joinery.',
    tag: 'Private Sanctuaries'
  },
  {
    title: 'Open-Concept Living & Dining',
    desc: 'Harmonious spatial flow connecting entertaining lounges with architectural dining settings, feature stone walls, and ambient cove lighting.',
    tag: 'Living & Dining'
  },
  {
    title: 'Luxury Modular Kitchens',
    desc: 'High-performance quartz surfaces, seamlessly integrated German appliances, ergonomic Blum hardware, and hidden pantry solutions.',
    tag: 'Culinary Spaces'
  },
  {
    title: 'Penthouse & Terrace Lounges',
    desc: 'Double-height ceiling architectures, indoor-outdoor glass transitions, panoramic sundeck lounges, and custom landscape greenery.',
    tag: 'Sky Living'
  }
];

export default function ResidentialLandingPagePage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#111111' }}>
      {/* Hero Banner */}
      <section
        style={{
          position: 'relative',
          minHeight: '60vh',
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
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.75) 0%, rgba(10, 10, 10, 0.45) 45%, rgba(10, 10, 10, 0.90) 100%)',
            zIndex: 1
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>
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
            Luxury Residential Architecture
          </span>

          <h1
            style={{
              fontFamily: '"Bai Jamjuree", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: '0 0 18px 0',
              lineHeight: 1.2
            }}
          >
            Residential Interior Design & Bespoke Homes
          </h1>

          <p
            style={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              fontWeight: 500,
              color: '#E0E0E0',
              lineHeight: 1.7,
              margin: '0 auto 30px auto',
              maxWidth: '740px'
            }}
          >
            We create luxury residences that feel as extraordinary to live in as they look. From high-rise penthouses to expansive family villas across Mumbai, every space is designed around your personality, comfort, and timeless elegance.
          </p>

          <Link
            href="/contact/"
            style={{
              backgroundColor: '#F4C600',
              color: '#0A0A0A',
              fontFamily: '"Quicksand", sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              padding: '14px 34px',
              borderRadius: '30px',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 4px 18px rgba(244, 198, 0, 0.35)'
            }}
          >
            Book Free Design Consultation
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section style={{ padding: '90px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '50px' }}>
          <div style={{ flex: '1 1 500px' }}>
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
              BESPOKE RESIDENCES
            </span>
            <h2
              style={{
                fontFamily: '"Bai Jamjuree", sans-serif',
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 600,
                color: '#111111',
                lineHeight: 1.25,
                marginBottom: '20px'
              }}
            >
              Designed Around Your Life, Not Just Trends
            </h2>
            <p
              style={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#555555',
                marginBottom: '20px'
              }}
            >
              A true home is an intimate sanctuary. It should bring a sense of ease the moment you walk through the door, with proportions that feel balanced, materials that age gracefully, and lighting that adapts from morning calm to evening relaxation.
            </p>
            <p
              style={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#555555',
                marginBottom: '28px'
              }}
            >
              SPACWORA manages the entire residential journey—from custom space planning and photorealistic 3D renders to material procurement, civil renovation, carpentry, and final styling.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/our-project/?category=residential" className="spacewora-btn-dark">
                View Residential Projects
              </Link>
              <Link href="/contact/" className="spacewora-btn-light">
                Schedule Consultation
              </Link>
            </div>
          </div>

          <div style={{ flex: '1 1 460px' }}>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.12)',
                border: '1px solid rgba(244, 198, 0, 0.2)'
              }}
            >
              <img
                src="/images/projects/ghatkopar-penthouse/01_20240803_181944.webp"
                alt="SPACWORA Luxury Residential Interior Architecture"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section style={{ backgroundColor: '#FAFAFA', padding: '90px 24px', borderTop: '1px solid #EAEAEA', borderBottom: '1px solid #EAEAEA' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span
              style={{
                color: '#F4C600',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                fontSize: '12px',
                fontWeight: 700,
                display: 'inline-block',
                marginBottom: '10px'
              }}
            >
              RESIDENTIAL DISCIPLINES
            </span>
            <h3
              style={{
                fontFamily: '"Bai Jamjuree", sans-serif',
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                fontWeight: 600,
                color: '#111111',
                margin: 0
              }}
            >
              Spaces We Curate For Modern Living
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px'
            }}
          >
            {RESIDENTIAL_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EAEAEA',
                  borderRadius: '14px',
                  padding: '32px 24px',
                  boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease'
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: '#F4C600',
                    backgroundColor: '#111111',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    marginBottom: '16px'
                  }}
                >
                  {pillar.tag}
                </span>
                <h4
                  style={{
                    fontFamily: '"Bai Jamjuree", sans-serif',
                    fontSize: '19px',
                    fontWeight: 600,
                    color: '#111111',
                    marginBottom: '12px'
                  }}
                >
                  {pillar.title}
                </h4>
                <p
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: '14.5px',
                    lineHeight: 1.65,
                    color: '#666666',
                    margin: 0
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3
            style={{
              fontFamily: '"Bai Jamjuree", sans-serif',
              fontSize: 'clamp(24px, 4vw, 38px)',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '16px'
            }}
          >
            Begin Your Home's Transformation
          </h3>
          <p
            style={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '16px',
              color: '#CCCCCC',
              lineHeight: 1.7,
              marginBottom: '30px'
            }}
          >
            Let’s discuss your vision, floor plans, and lifestyle requirements in a personalized 1-on-1 design consultation.
          </p>
          <Link
            href="/contact/"
            style={{
              backgroundColor: '#F4C600',
              color: '#0A0A0A',
              fontFamily: '"Quicksand", sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              padding: '14px 36px',
              borderRadius: '30px',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 4px 18px rgba(244, 198, 0, 0.35)'
            }}
          >
            Book Design Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

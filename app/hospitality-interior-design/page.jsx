import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Hospitality Interior Design & Turnkey Spaces | SPACWORA',
  description:
    'Bespoke hospitality interior design, boutique lounges, restaurant architecture, and luxury resort fit-outs in Mumbai by SPACWORA Design Studio.',
};

const HOSPITALITY_CAPABILITIES = [
  {
    title: 'Fine Dining & Luxury Restaurants',
    desc: 'Atmospheric lighting design, custom banquette joinery, bespoke acoustic ceiling geometries, and immersive table layouts.',
    tag: 'Dining Concepts'
  },
  {
    title: 'Cocktail Bars & Speakeasies',
    desc: 'Sculptural backbars, backlit onyx counters, custom metalwork, and ambient illumination tailored for nightfall energy.',
    tag: 'Lounge & Bar'
  },
  {
    title: 'Boutique Hotel Lounges & Lobbies',
    desc: 'Grand arrival experience lobbies, bespoke concierge desks, and curated lounge seating that celebrate hospitality luxury.',
    tag: 'Hotel Spaces'
  },
  {
    title: 'Turnkey Commercial Kitchens & MEP',
    desc: 'Complete commercial kitchen exhaust, grease traps, heavy-duty electrical distribution, and fire suppression compliance.',
    tag: 'Specialized MEP'
  }
];

export default function HospitalityInteriorDesignPage() {
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
          backgroundImage: "url('/images/studio/spacwora-hospitality-dining.webp')",
          backgroundPosition: 'center 40%',
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
            Hospitality & Dining Architecture
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
            Hospitality Interior Design & Experiential Spaces
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
            Crafting unforgettable guest experiences through sensual lighting, rich textures, and architectural grandeur. SPACWORA delivers end-to-end design and turnkey execution for restaurants, bars, and boutique hotels across Mumbai.
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
            Discuss Your Hospitality Concept
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
              EXPERIENTIAL DESIGN
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
              Where Atmosphere Meets Operational Precision
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
              In hospitality design, ambiance dictates success. From the second a guest steps into your entryway to the comfort of their table seating, every touchpoint must feel intentional, warm, and distinctly memorable.
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
              SPACWORA combines creative interior storytelling with stringent engineering oversight—ensuring commercial grade finishes, seamless service circulation, acoustic comfort, and flawless regulatory compliance.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/our-project/?category=hospitality" className="spacewora-btn-dark">
                Explore Hospitality Projects
              </Link>
              <Link href="/contact/" className="spacewora-btn-light">
                Consult With Our Designers
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
                src="/images/studio/spacwora-hospitality-bar.webp"
                alt="SPACWORA Hospitality Bar & Lounge Architecture"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Capabilities Grid */}
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
              CORE CAPABILITIES
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
              Our Hospitality Design & Contracting Disciplines
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px'
            }}
          >
            {HOSPITALITY_CAPABILITIES.map((cap, idx) => (
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
                  {cap.tag}
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
                  {cap.title}
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
                  {cap.desc}
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
            Bring Your Hospitality Vision to Life
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
            Partner with SPACWORA for comprehensive concept design, 3D rendering, budgeting, and turnkey fit-out execution.
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
            Book Hospitality Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

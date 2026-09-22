import React from 'react';

const TRUST_PILLARS = [
  {
    icon: '✦',
    title: 'End-to-End Turnkey Execution',
    desc: 'Complete accountability from 3D design to civil renovation, bespoke joinery, and white-glove handover.'
  },
  {
    icon: '✦',
    title: 'Precision Architectural Planning',
    desc: 'Meticulously crafted spatial layouts, ergonomic detailing, and integrated lighting schematics.'
  },
  {
    icon: '✦',
    title: 'Curated Premium Materials',
    desc: 'Direct sourcing of Italian marble, architectural veneers, acoustic paneling, and German hardware.'
  },
  {
    icon: '✦',
    title: 'Transparent Timelines & Budget',
    desc: 'Rigorous project milestone tracking ensuring guaranteed on-time completion with no hidden costs.'
  }
];

export default function ClientLogosSection() {
  return (
    <section
      style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        padding: '90px 24px',
        borderTop: '1px solid rgba(244, 198, 0, 0.25)',
        borderBottom: '1px solid rgba(244, 198, 0, 0.25)',
        position: 'relative',
        zIndex: 5,
        clear: 'both',
        display: 'block',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
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
              marginBottom: '12px',
            }}
          >
            STUDIO ASSURANCE
          </span>
          <h2
            style={{
              fontFamily: '"Bai Jamjuree", sans-serif',
              fontSize: 'clamp(24px, 3.5vw, 38px)',
              fontWeight: 600,
              color: '#FFFFFF',
              margin: '0 0 14px 0',
            }}
          >
            The SPACWORA Standard of Excellence
          </h2>
          <p
            style={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '15px',
              color: '#AAAAAA',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Every space we deliver is built upon an unwavering commitment to architectural precision, timeless aesthetics, and uncompromising execution quality.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '24px',
          }}
        >
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '30px 24px',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  color: '#F4C600',
                  fontSize: '20px',
                  marginBottom: '16px',
                }}
              >
                {pillar.icon}
              </div>
              <h3
                style={{
                  fontFamily: '"Bai Jamjuree", sans-serif',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '10px',
                  lineHeight: 1.3,
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: '"Quicksand", sans-serif',
                  fontSize: '14px',
                  color: '#999999',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

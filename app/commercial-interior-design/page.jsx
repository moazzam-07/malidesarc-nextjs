import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Commercial Interior Design & Turnkey Workspaces | SPACWORA',
  description:
    'Turnkey commercial interior design and corporate office fit-outs in Mumbai. SPACWORA delivers bespoke executive offices, collaborative workspaces, and architectural execution.',
};

const COMMERCIAL_CAPABILITIES = [
  {
    title: 'Corporate Headquarters & Offices',
    desc: 'Bespoke executive suites, ergonomic open workstations, and brand-aligned corporate environments designed for productivity.',
    tag: 'Executive Workspaces'
  },
  {
    title: 'Acoustic Boardrooms & Meeting Pods',
    desc: 'High-performance acoustic wall paneling, integrated smart conferencing AV systems, and premium boardroom tables.',
    tag: 'Acoustic Architecture'
  },
  {
    title: 'Retail Showrooms & Experience Centers',
    desc: 'High-impact retail environments designed to elevate product presentation, enhance brand recall, and guide customer journeys.',
    tag: 'Retail & Display'
  },
  {
    title: 'Turnkey MEP & Civil Contracting',
    desc: 'Complete HVAC zoning, electrical distribution, fire-fighting compliance, access control, and precision structural execution.',
    tag: 'Integrated Contracting'
  }
];

export default function CommercialInteriorDesignPage() {
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
          backgroundImage: "url('/images/studio/spacwora-boardroom.webp')",
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
            Corporate & Commercial Architecture
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
            Commercial Interior Design & Turnkey Workspaces
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
            SPACWORA delivers sophisticated commercial interiors and end-to-end contracting across Mumbai. We harmonize brand identity, spatial ergonomics, and engineering precision to create workspaces that empower business growth.
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
            Consult Our Commercial Team
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
              COMMERCIAL EXPERTISE
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
              Transforming Workspaces Into Competitive Assets
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
              A modern commercial environment is more than an office—it is a tangible reflection of your company culture, a tool for talent retention, and an engine for daily collaboration.
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
              At SPACWORA, we handle the entire commercial lifecycle: space audits, 3D architectural schematics, electrical and HVAC zoning, acoustic ceilings, customized executive furniture, and white-glove turnkey commissioning.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/our-project/?category=commercial" className="spacewora-btn-dark">
                View Commercial Projects
              </Link>
              <Link href="/contact/" className="spacewora-btn-light">
                Request Site Visit
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
                src="/images/projects/jkt-corporate-office/01_picture1.webp"
                alt="SPACWORA Commercial Interior Workspace Project"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Commercial Capabilities */}
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
              SERVICES & SCOPE
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
              Our Commercial Design & Execution Capabilities
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px'
            }}
          >
            {COMMERCIAL_CAPABILITIES.map((cap, idx) => (
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
            Ready to Build Your Flagship Commercial Workspace?
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
            Connect with SPACWORA’s commercial interior architects to schedule an on-site feasibility evaluation and spatial layout consultation.
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
            Start Your Commercial Project
          </Link>
        </div>
      </section>
    </div>
  );
}

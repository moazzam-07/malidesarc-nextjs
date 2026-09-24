'use client';

import React from 'react';
import Link from 'next/link';

const flagshipServices = [
  {
    title: 'Turnkey Interior Projects',
    subtitle: 'End-to-End Execution',
    desc: 'Experience a seamless design journey where every aspect of your project is managed under one roof. From planning and 3D architectural design to civil work, electrical, bespoke joinery, lighting, and final white-glove handover, we deliver complete turnkey interiors with precision and accountability.'
  },
  {
    title: 'Design Consultation & Suggestions',
    subtitle: 'Strategic Guidance',
    desc: "Whether you're planning a new luxury residence or revitalizing an existing commercial space, our expert consultation helps you make confident design decisions. We provide layout planning, material guidance, lighting concepts, color palettes, and furniture recommendations that align with your vision."
  },
  {
    title: 'Landscape & Terrace Design',
    subtitle: 'Outdoor & Terraces',
    desc: 'Inspiring architecture deserves equally thoughtfully crafted outdoor spaces. We design rooftop gardens, courtyards, terraces, water features, pathways, and outdoor living environments that complement your lifestyle while enhancing the overall architectural experience.'
  }
];

const studioDisciplines = [
  {
    title: 'Residential Interiors',
    subtitle: 'Bespoke Living',
    desc: 'Luxury villas, penthouses, and private residences tailored around personal lifestyle, circadian lighting, and refined comfort.',
    image: '/images/homepage/hero_01_enscape_2023-06-14-01-34-23.webp',
    link: '/our-services#residential'
  },
  {
    title: 'Commercial Workspaces',
    subtitle: 'Corporate Excellence',
    desc: 'Modern executive offices, boardrooms, and collaborative corporate environments engineered for brand prestige and productivity.',
    image: '/images/studio/spacwora-boardroom.webp',
    link: '/our-services#commercial'
  },
  {
    title: 'Hospitality & Dining',
    subtitle: 'Experiential Spaces',
    desc: 'Fine-dining restaurants, boutique hotel lounges, and signature cocktail bars crafted to immerse guests in refined luxury.',
    image: '/images/studio/spacwora-hospitality-dining.webp',
    link: '/our-services#hospitality'
  },
  {
    title: 'Penthouses & Sky Villas',
    subtitle: 'High-Rise Luxury',
    desc: 'Sky residences featuring expansive architectural elevations, panoramic skyline views, and bespoke double-height craftsmanship.',
    image: '/images/homepage/hero_13_picture4.webp',
    link: '/our-services#penthouse'
  },
  {
    title: 'Turnkey Execution',
    subtitle: 'Comprehensive Realization',
    desc: 'Complete project realization from initial blueprints to civil renovation, custom carpentry, on-site supervision, and flawless handover.',
    image: '/images/studio/spacwora-hospitality-grand-lobby.webp',
    link: '/our-services#turnkey'
  },
  {
    title: 'Exhibition & Pavilions',
    subtitle: 'Brand Environments',
    desc: 'Experiential brand pavilions, interactive booths, and high-impact exhibition architectures engineered for maximum brand presence.',
    image: '/images/studio/spacwora-hospitality-bar.webp',
    link: '/our-services#exhibition'
  }
];

export default function ServicesSection() {
  return (
    <section 
      className="services-flagship-section"
      style={{
        padding: 'clamp(60px, 8vw, 90px) 20px 70px 20px',
        backgroundColor: '#FFFFFF',
        color: '#111111'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 50px)' }}>
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
            OUR SERVICES
          </span>
          <h2 
            style={{
              fontFamily: '"Bai Jamjuree", sans-serif',
              fontSize: 'clamp(2rem, 1.8rem + 1.5vw, 3.2rem)',
              fontWeight: 500,
              color: '#111111',
              lineHeight: 1.25,
              marginBottom: '18px'
            }}
          >
            Complete Interior & Architectural Solutions
          </h2>
          <div 
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#F4C600',
              margin: '0 auto'
            }} 
          />
        </div>

        {/* Flagship 3 Services Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '28px',
            marginBottom: '70px'
          }}
        >
          {flagshipServices.map((srv) => (
            <div key={srv.title} className="spacewora-service-card">
              <div>
                <span 
                  style={{
                    display: 'inline-block',
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: '#F4C600',
                    backgroundColor: '#111111',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    marginBottom: '16px'
                  }}
                >
                  {srv.subtitle}
                </span>
                <h3 
                  style={{
                    fontFamily: '"Bai Jamjuree", sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#111111',
                    marginBottom: '14px',
                    lineHeight: 1.3
                  }}
                >
                  {srv.title}
                </h3>
                <p 
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: '#555555',
                    margin: 0
                  }}
                >
                  {srv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Studio Disciplines Visual Grid with Authentic Photography */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
            DISCIPLINES
          </span>
          <h3
            style={{
              fontFamily: '"Bai Jamjuree", sans-serif',
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 600,
              color: '#111111',
              margin: '0 0 10px 0'
            }}
          >
            Key Spatial Sectors We Transform
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '26px'
          }}
        >
          {studioDisciplines.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '360px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#0A0A0A',
                  border: '1px solid #EAEAEA',
                  boxShadow: '0 6px 22px rgba(0, 0, 0, 0.06)',
                  transition: 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#F4C600';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.14)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#EAEAEA';
                  e.currentTarget.style.boxShadow = '0 6px 22px rgba(0, 0, 0, 0.06)';
                }}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Dark Contrast Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.15) 0%, rgba(10, 10, 10, 0.5) 45%, rgba(10, 10, 10, 0.95) 100%)',
                    zIndex: 1,
                    pointerEvents: 'none'
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '26px 24px',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(10, 10, 10, 0.8)',
                      backdropFilter: 'blur(6px)',
                      color: '#F4C600',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      border: '1px solid rgba(244, 198, 0, 0.35)',
                      marginBottom: '10px'
                    }}
                  >
                    {item.subtitle}
                  </span>

                  <h4
                    style={{
                      fontFamily: '"Bai Jamjuree", sans-serif',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: '0 0 8px 0',
                      lineHeight: 1.25
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: '13.5px',
                      lineHeight: 1.5,
                      color: '#E0E0E0',
                      margin: 0
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

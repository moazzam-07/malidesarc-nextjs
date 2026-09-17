import React from 'react';

const pillars = [
  {
    number: '01',
    title: 'Bespoke Design Approach',
    description:
      'Every project is individually designed to match your lifestyle, aspirations, and vision. Nothing is copied. Everything is created exclusively for you.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Interior Architecture Expertise',
    description:
      'Beautiful interiors begin with intelligent planning. Our architectural approach ensures every space is functional, balanced, and naturally elegant.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Premium Material Selection',
    description:
      'From natural stone and wood finishes to lighting and textures, every element is carefully curated to deliver a refined and timeless experience.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Turnkey Excellence',
    description:
      'We manage everything—from concept development and 3D visualization to execution, furniture, styling, and final handover.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    number: '05',
    title: 'Honest Communication',
    description:
      'Transparency, regular updates, realistic timelines, and professional project management are at the heart of every client relationship.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    number: '06',
    title: 'Lasting Relationships',
    description:
      'For us, completing a project is not the end of the journey. It is the beginning of a long-term relationship built on trust.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

export default function WhySpaceworaSection() {
  return (
    <section 
      className="why-spacewora-section"
      style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        padding: '90px 20px',
        position: 'relative',
        borderTop: '1px solid rgba(244, 198, 0, 0.2)',
        borderBottom: '1px solid rgba(244, 198, 0, 0.2)'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            WHY SPACEWORA
          </span>
          <h2 
            style={{
              fontFamily: '"Bai Jamjuree", sans-serif',
              fontSize: 'clamp(2rem, 1.8rem + 1.5vw, 3.2rem)',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: 1.25,
              maxWidth: '850px',
              margin: '0 auto 18px auto'
            }}
          >
            Why Clients Trust SPACEWORA Design Studio
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

        {/* 6 Pillars Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '28px'
          }}
        >
          {pillars.map((pillar) => (
            <div key={pillar.number} className="spacewora-pillar-card">
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '22px'
                }}
              >
                <div 
                  style={{
                    color: '#F4C600',
                    width: '42px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {pillar.icon}
                </div>
                <span 
                  style={{
                    fontFamily: '"Bai Jamjuree", sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'rgba(244, 198, 0, 0.5)'
                  }}
                >
                  {pillar.number}
                </span>
              </div>
              <h3 
                style={{
                  fontFamily: '"Bai Jamjuree", sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '14px',
                  lineHeight: 1.3
                }}
              >
                {pillar.title}
              </h3>
              <p 
                style={{
                  fontFamily: '"Quicksand", sans-serif',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: '#BDBDBD',
                  margin: 0
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


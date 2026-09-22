'use client';

import React from 'react';

const REVIEWS = [
  {
    rating: '5.0',
    stars: '★★★★★',
    text: 'SPACWORA transformed our penthouse into an architectural masterpiece. From the expansive open living layouts and false ceiling geometries to the bespoke Italian marble finishes, the level of precision and turnkey dedication exceeded all our expectations.',
    client: 'Mr. & Mrs. Parekh',
    project: 'Ghatkopar Penthouse Residence'
  },
  {
    rating: '5.0',
    stars: '★★★★★',
    text: 'Executing our new corporate workspace within a strict timeline required seamless coordination. The SPACWORA team managed every detail—from executive acoustic glass partitions and custom workstations to integrated profile lighting—with absolute professionalism.',
    client: 'Director of Corporate Real Estate',
    project: 'JKT Corporate Headquarters, Mumbai'
  },
  {
    rating: '5.0',
    stars: '★★★★★',
    text: 'What truly impressed us was SPACWORA’s spatial design sensibility. They designed around our daily lifestyle rather than fleeting trends. Every bespoke wardrobe, fluted wall panel, and ambient light detail feels effortless and enduring.',
    client: 'Dr. Siddharth Mehta',
    project: 'Powai Luxury Lakeview Residence'
  },
  {
    rating: '5.0',
    stars: '★★★★★',
    text: 'SPACWORA delivered an extraordinary hospitality environment for our dining space. The warm ambient illumination, custom banquette seating, and curated material textures created an ambiance that guests consistently praise.',
    client: 'Hospitality Project Lead',
    project: 'Haldiram Dining & Hospitality Lounge'
  },
  {
    rating: '5.0',
    stars: '★★★★★',
    text: 'Our interior experience with SPACWORA was seamless. Having a single dedicated design studio handle 3D visualizations, material procurement, civil renovation, and white-glove handover gave us complete confidence throughout.',
    client: 'Rajiv & Ananya Singhania',
    project: 'Bhayandar Luxury 3BHK Residence'
  },
  {
    rating: '5.0',
    stars: '★★★★★',
    text: 'From concept blueprints to final turnkey handover, SPACWORA handled every civil, electrical, and bespoke carpentry milestone with total transparency. Their attention to lighting accents and premium veneer finishes is second to none.',
    client: 'Karan & Shweta Desai',
    project: 'Borivali Contemporary Duplex'
  }
];

export default function TestimonialsSection() {
  // Duplicate array for continuous infinite marquee loop
  const marqueeReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section 
      style={{ 
        backgroundColor: '#FFFFFF', 
        overflow: 'hidden',
        position: 'relative',
        zIndex: 4,
        clear: 'both',
        display: 'block',
        width: '100%',
        padding: '100px 0 90px 0',
        boxSizing: 'border-box'
      }}
    >
      
      {/* Header Container */}
      <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center', padding: '0 20px 50px 20px' }}>
        <span 
          style={{
            color: '#F4C600',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '13px',
            fontWeight: 700,
            display: 'inline-block',
            marginBottom: '14px'
          }}
        >
          CLIENT EXPERIENCES
        </span>
        <h2 
          style={{
            fontFamily: '"Bai Jamjuree", sans-serif',
            fontSize: 'clamp(2.2rem, 1.8rem + 1.5vw, 3.4rem)',
            fontWeight: 600,
            color: '#111111',
            lineHeight: 1.25,
            margin: '0 0 18px 0'
          }}
        >
          What Our Clients Say
        </h2>
        <p
          style={{
            fontFamily: '"Quicksand", sans-serif',
            fontSize: '16px',
            color: '#666666',
            maxWidth: '650px',
            margin: '0 auto 24px auto',
            lineHeight: 1.65
          }}
        >
          Hear from clients who have experienced our interior design, contracting, and turnkey project execution firsthand.
        </p>
        <div 
          style={{
            width: '60px',
            height: '2px',
            backgroundColor: '#F4C600',
            margin: '0 auto'
          }} 
        />
      </div>

      {/* Infinite Horizontal Marquee Carousel */}
      <div className="reviews-marquee-container">
        <div className="reviews-marquee-track">
          {marqueeReviews.map((rev, idx) => (
            <div key={idx} className="reviews-marquee-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ color: '#F4C600', fontSize: '18px', letterSpacing: '2px' }}>
                    {rev.stars}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#333333' }}>
                    {rev.rating}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: '#444444',
                    margin: '0 0 24px 0',
                    fontStyle: 'italic'
                  }}
                >
                  “{rev.text}”
                </p>
              </div>
              <div style={{ borderTop: '1px solid #EAEAEA', paddingTop: '16px' }}>
                <div
                  style={{
                    fontFamily: '"Bai Jamjuree", sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#111111'
                  }}
                >
                  {rev.client}
                </div>
                <div
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: '13px',
                    color: '#777777',
                    fontWeight: 600,
                    marginTop: '2px'
                  }}
                >
                  {rev.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

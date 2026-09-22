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
  }
];

export default function TestimonialsSection() {
  return (
    <>
      <div 
        className="elementor-element elementor-element-83bda0d e-flex e-con-boxed e-con e-parent" 
        data-e-type="container" 
        data-element_type="container" 
        data-id="83bda0d" 
        data-settings='{"background_background":"classic"}'
        style={{ padding: '90px 20px 30px 20px', backgroundColor: '#FFFFFF' }}
      >
        <div className="e-con-inner" style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
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
            CLIENT EXPERIENCES
          </span>
          <h2 
            className="elementor-heading-title elementor-size-default"
            style={{
              fontFamily: '"Bai Jamjuree", sans-serif',
              fontSize: 'clamp(2rem, 1.8rem + 1.5vw, 3.2rem)',
              fontWeight: 500,
              color: '#111111',
              lineHeight: 1.25,
              marginBottom: '18px'
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
              margin: '0 auto 20px auto',
              lineHeight: 1.6
            }}
          >
            Hear from homeowners, corporate leaders, and hospitality partners who have experienced SPACWORA’s turnkey interior architecture firsthand.
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
      </div>

      <div 
        className="elementor-element elementor-element-d0635c2 e-con-full e-flex e-con e-parent" 
        data-e-type="container" 
        data-element_type="container" 
        data-id="d0635c2" 
        data-settings='{"background_background":"classic"}'
        style={{ padding: '0 20px 90px 20px', backgroundColor: '#FFFFFF' }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', width: '100%' }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '26px'
            }}
          >
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FAFAFA',
                  border: '1px solid #EAEAEA',
                  borderRadius: '16px',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#F4C600';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#EAEAEA';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                }}
              >
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
      </div>
    </>
  );
}

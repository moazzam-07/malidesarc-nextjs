import React from 'react';
import Link from 'next/link';

const categories = [
  {
    title: 'Residential Interiors',
    desc: 'Thoughtfully designed homes that balance comfort, luxury, and everyday functionality.',
    tag: 'Bespoke Homes'
  },
  {
    title: 'Commercial Interiors',
    desc: 'Modern offices, corporate spaces, retail stores, clinics, and showrooms that strengthen your brand identity while enhancing productivity.',
    tag: 'Corporate & Retail'
  },
  {
    title: 'Hospitality Design',
    desc: 'Hotels, cafés, restaurants, lounges, resorts, and guest experiences designed to create memorable moments through elegant spatial design.',
    tag: 'Dining & Leisure'
  },
  {
    title: 'Exhibition Design',
    desc: 'Creative exhibition booths and experiential display environments that communicate your brand with impact and sophistication.',
    tag: 'Brand Experiences'
  },
  {
    title: 'Luxury Bungalows',
    desc: 'Exclusive residences designed with bespoke architecture, premium materials, and timeless aesthetics that reflect individuality and refined living.',
    tag: 'Private Estates'
  },
  {
    title: 'Penthouse Interiors',
    desc: 'Luxury penthouses crafted with expansive layouts, panoramic experiences, custom detailing, and sophisticated contemporary living.',
    tag: 'High-Rise Luxury'
  }
];

export default function ClientVerticalsSection() {
  return (
    <div 
      className="elementor-element elementor-element-14b048e e-flex e-con-boxed e-con e-parent" 
      data-e-type="container" 
      data-element_type="container" 
      data-id="14b048e" 
      data-settings='{"background_background":"classic"}'
      style={{ padding: '90px 20px', backgroundColor: '#FAFAFA' }}
    >
      <div className="e-con-inner" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
            PROJECT CATEGORIES
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
            Spaces We Design
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

        {/* 6 Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '26px'
          }}
        >
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              className="spacewora-category-card"
            >
              <div>
                <span 
                  style={{
                    display: 'inline-block',
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: '#F4C600',
                    backgroundColor: '#0A0A0A',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    marginBottom: '16px'
                  }}
                >
                  {cat.tag}
                </span>
                <h3 
                  style={{
                    fontFamily: '"Bai Jamjuree", sans-serif',
                    fontSize: '21px',
                    fontWeight: 600,
                    color: '#111111',
                    marginBottom: '12px',
                    lineHeight: 1.3
                  }}
                >
                  {cat.title}
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
                  {cat.desc}
                </p>
              </div>

              <div style={{ marginTop: '22px' }}>
                <Link
                  href="/our-project/"
                  className="spacewora-category-link"
                >
                  View Projects →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'residential', label: 'Residential' },
  { id: 'retail', label: 'Retails' },
  { id: 'sales-office', label: 'Sales Office' },
  { id: 'show-flats', label: 'Show Flats' },
];

export const PROJECTS = [
  {
    id: 'vora-skyline',
    title: 'Vora Skyline Project',
    category: 'commercial',
    categoryLabel: 'Commercial',
    area: '1170 sq. ft.',
    image: '/wp-content/uploads/2026/08/vora-icon-contemporary-interior-scaled.webp',
    href: '/vora-skyline/'
  },
  {
    id: 'stratum',
    title: 'Stratum Project',
    category: 'commercial',
    categoryLabel: 'Commercial',
    area: '430 sq. ft.',
    image: '/wp-content/uploads/2026/08/stratum-kitchen-interior.webp',
    href: '/stratum/'
  },
  {
    id: 'hosteller',
    title: 'Hosteller Project',
    category: 'commercial',
    categoryLabel: 'Commercial',
    area: '9000 sq. ft.',
    image: '/wp-content/uploads/2026/08/hostellar-hostel-dining-area.webp',
    href: '/hosteller/'
  },
  {
    id: 'eurogrip',
    title: 'Eurogrip Tyres Project',
    category: 'retail',
    categoryLabel: 'Retails',
    area: '1 BHK',
    image: '/wp-content/uploads/2026/08/eurogrip-decorated-showroom-entrance.webp',
    href: '/eurogriptyres/'
  },
  {
    id: 'baluwala-sample-flat',
    title: 'Baluwala Show Flat',
    category: 'show-flats',
    categoryLabel: 'Show Flats',
    area: '1 BHK',
    image: '/wp-content/uploads/2026/08/baluwala-sample-flat-modern-living-room-tv-unit.webp',
    href: '/baluwala-sample-flat/'
  },
  {
    id: 'taj-boutique-bandra',
    title: 'Taj Boutique Bandra Project',
    category: 'hospitality',
    categoryLabel: 'Hospitality',
    area: '3 Floors',
    image: '/wp-content/uploads/2026/08/Bandra-House.webp',
    href: '/taj-boutique-bandra/'
  },
  {
    id: 'dgs-gurudarshan',
    title: 'DGS Gurudarshan Project',
    category: 'sales-office',
    categoryLabel: 'Sales Office',
    area: '1,500 sq. ft.',
    image: '/wp-content/uploads/2026/08/dgs-gurudarshan-sales-office-wide-reception-lounge.webp',
    href: '/dgs-gurudarshan/'
  },
  {
    id: 'boss',
    title: 'Codeword Boss',
    category: 'sales-office',
    categoryLabel: 'Sales Office',
    area: '1,500 sq. ft.',
    image: '/wp-content/uploads/2026/08/codeword-boss-sales-office-reception-area.webp',
    href: '/boss/'
  },
  {
    id: 'baluwala-sales-office',
    title: 'Baluwala Developer',
    category: 'sales-office',
    categoryLabel: 'Sales Office',
    area: '375 sq. ft.',
    image: '/wp-content/uploads/2026/08/baluwala-sales-office-exterior-entrance.webp',
    href: '/baluwala-developers-sales-office/'
  },
  {
    id: 'auris-2103',
    title: 'Auris 2103 Project',
    category: 'residential',
    categoryLabel: 'Residential',
    area: '3 BHK',
    image: '/wp-content/uploads/2026/08/malad-interior-suhrid0758.webp',
    href: '/auris-2103/'
  },
  {
    id: 'bellisma',
    title: 'Bellissima Project',
    category: 'sales-office',
    categoryLabel: 'Sales Office',
    area: '800 sq. ft.',
    image: '/wp-content/uploads/2026/08/bellisma-sales-office-dining-seating-area.webp',
    href: '/bellisma/'
  },
  {
    id: 'vensco',
    title: 'Vensco Project',
    category: 'show-flats',
    categoryLabel: 'Show Flats',
    area: '6000 sq. ft.',
    image: '/wp-content/uploads/2026/08/vensco-sample-flat-dining-area-window-view.webp',
    href: '/vensco/'
  },
  {
    id: 'project-rudra',
    title: 'Rudra Project',
    category: 'sales-office',
    categoryLabel: 'Sales Office',
    area: '2000 sq. ft.',
    image: '/wp-content/uploads/2026/08/rudra-sales-office-client-seating-lounge-scaled.webp',
    href: '/project-rudra/'
  },
  {
    id: 'hotel-karl-residency',
    title: 'Hotel Karl Residency Project',
    category: 'hospitality',
    categoryLabel: 'Hospitality',
    area: '6000 sq. ft.',
    image: '/wp-content/uploads/2026/08/hotel-karl-residency-modern-bathroom.webp',
    href: '/hotel-karl-residency/'
  },
  {
    id: 'dtdc',
    title: 'DTDC Commercial Project',
    category: 'commercial',
    categoryLabel: 'Commercial',
    area: '5050 sq. ft.',
    image: '/wp-content/uploads/2026/08/dtdc-commercial-office-private-meeting-room-scaled.webp',
    href: '/dtdc/'
  },
  {
    id: 'emerald-isle',
    title: 'Emerald Isle Project',
    category: 'residential',
    categoryLabel: 'Residential',
    area: '2 BHK',
    image: '/wp-content/uploads/2026/08/emerald-isle-residential-project-living-room-feature-wall-scaled-1.webp',
    href: '/emerald-isle/'
  },
  {
    id: 'blue-grass-residency',
    title: 'Blue Grass Residency Project',
    category: 'residential',
    categoryLabel: 'Residential',
    area: '2100 sq. ft.',
    image: '/wp-content/uploads/2026/08/blue-grass-residency-master-bedroom-tv-unit.webp',
    href: '/blue-grass-residency/'
  }
];

export default function ProjectsFilterGrid() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = CATEGORIES.find(c => c.id === cat.toLowerCase() || c.id === cat.toLowerCase().replace(/\s+/g, '-'));
      if (match) {
        setSelectedCategory(match.id);
      }
    }
  }, [searchParams]);

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handleCategorySelect = (catId) => {
    startTransition(() => {
      setSelectedCategory(catId);
    });
  };

  return (
    <section 
      style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '50px 20px 100px 20px', 
        minHeight: '80vh',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        
        {/* Category Filter Pills */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
            padding: '0 10px'
          }}
        >
          {CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategorySelect(cat.id)}
                style={{
                  backgroundColor: isActive ? '#F4C600' : '#FFFFFF',
                  color: isActive ? '#111111' : '#2A2A2A',
                  border: isActive ? '1px solid #F4C600' : '1px solid #E2E2E2',
                  padding: '11px 26px',
                  borderRadius: '9999px',
                  fontSize: '14.5px',
                  fontFamily: '"Bai Jamjuree", sans-serif',
                  fontWeight: isActive ? 700 : 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isActive ? '0 4px 14px rgba(244, 198, 0, 0.35)' : '0 2px 6px rgba(0, 0, 0, 0.04)',
                  outline: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#F4C600';
                    e.currentTarget.style.backgroundColor = '#FCFBF7';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#E2E2E2';
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                  }
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 4-Column Project Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '26px',
            opacity: isPending ? 0.7 : 1,
            transition: 'opacity 0.25s ease'
          }}
          className="spacewora-projects-grid"
        >
          {filteredProjects.map((project) => {
            const isHovered = hoveredCard === project.id;
            return (
              <Link
                key={project.id}
                href={project.href}
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '370px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image with Zoom */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url("${project.image}")`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.2, 0, 0.2, 1)',
                    zIndex: 1
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: isHovered 
                      ? 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.88) 100%)'
                      : 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.72) 100%)',
                    transition: 'background 0.4s ease',
                    zIndex: 2
                  }}
                />

                {/* Card Text Content (Centered as in reference) */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    textAlign: 'center',
                    transition: 'transform 0.4s cubic-bezier(0.2, 0, 0.2, 1)',
                    transform: isHovered ? 'translateY(-18px)' : 'translateY(0)'
                  }}
                >
                  <h3 
                    style={{
                      fontFamily: '"Bai Jamjuree", sans-serif',
                      fontSize: '21px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: '0 0 8px 0',
                      lineHeight: 1.25,
                      textShadow: '0 2px 10px rgba(0,0,0,0.85)',
                      letterSpacing: '0.3px'
                    }}
                  >
                    {project.title}
                  </h3>

                  <p 
                    style={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: '14.5px',
                      fontWeight: 600,
                      color: isHovered ? '#F4C600' : 'rgba(255, 255, 255, 0.9)',
                      margin: 0,
                      letterSpacing: '1px',
                      textShadow: '0 1px 6px rgba(0,0,0,0.7)',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {project.categoryLabel}
                  </p>

                  {/* Area Badge & Button (Slides up on Hover) */}
                  <div 
                    style={{
                      marginTop: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(15px)',
                      transition: 'opacity 0.35s ease, transform 0.35s ease'
                    }}
                  >
                    {project.area && (
                      <span 
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.18)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          color: '#FFFFFF',
                          fontSize: '12px',
                          fontWeight: 600,
                          fontFamily: '"Quicksand", sans-serif',
                          padding: '4px 14px',
                          borderRadius: '9999px',
                          border: '1px solid rgba(255, 255, 255, 0.25)'
                        }}
                      >
                        {project.area}
                      </span>
                    )}

                    <span 
                      style={{
                        backgroundColor: '#F4C600',
                        color: '#111111',
                        fontSize: '13px',
                        fontWeight: 700,
                        fontFamily: '"Bai Jamjuree", sans-serif',
                        padding: '7px 18px',
                        borderRadius: '9999px',
                        boxShadow: '0 4px 12px rgba(244, 198, 0, 0.4)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      Explore Project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty state safeguard */}
        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#666' }}>
            <p style={{ fontSize: '18px', fontFamily: '"Quicksand", sans-serif' }}>
              No projects found in this category.
            </p>
          </div>
        )}

      </div>

      <style jsx>{`
        @media (min-width: 1120px) {
          .spacewora-projects-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 1119px) and (min-width: 820px) {
          .spacewora-projects-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 819px) and (min-width: 580px) {
          .spacewora-projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 579px) {
          .spacewora-projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

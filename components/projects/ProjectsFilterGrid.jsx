'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { ALL_PROJECTS } from '@/lib/projectsData';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Bespoke Residential' },
  { id: 'commercial', label: 'Commercial & Retail' },
  { id: 'hospitality', label: 'Luxury Hospitality' },
];

export default function ProjectsFilterGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isPending, startTransition] = useTransition();

  const filteredProjects = selectedCategory === 'all'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === selectedCategory);

  const handleFilterClick = (catId) => {
    startTransition(() => {
      setSelectedCategory(catId);
    });
  };

  return (
    <section 
      style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '60px 24px 100px 24px', 
        maxWidth: '1440px', 
        margin: '0 auto' 
      }}
    >
      {/* Category Filter Pills */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '12px', 
          marginBottom: '40px' 
        }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleFilterClick(cat.id)}
              style={{
                backgroundColor: isActive ? '#F4C600' : '#FFFFFF',
                color: isActive ? '#111111' : '#333333',
                border: isActive ? '2px solid #F4C600' : '1px solid #D1D5DB',
                borderRadius: '30px',
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: isActive ? 700 : 600,
                cursor: 'pointer',
                fontFamily: '"Quicksand", sans-serif',
                letterSpacing: '0.5px',
                transition: 'all 0.25s ease',
                boxShadow: isActive ? '0 4px 14px rgba(244, 198, 0, 0.35)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = '#F4C600';
                  e.currentTarget.style.color = '#111111';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = '#D1D5DB';
                  e.currentTarget.style.color = '#333333';
                }
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Count Summary */}
      <div style={{ textAlign: 'center', marginBottom: '30px', color: '#555555', fontSize: '14px', fontWeight: 600 }}>
        Showing {filteredProjects.length} authentic studio project{filteredProjects.length === 1 ? '' : 's'}
      </div>

      {/* 4-Column Responsive Grid */}
      <div 
        className="spacewora-projects-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '24px',
          transition: 'opacity 0.3s ease',
          opacity: isPending ? 0.6 : 1,
        }}
      >
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block'
            }}
          >
            <div
              style={{
                position: 'relative',
                height: '420px',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                border: '1px solid #EAEAEA'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.16)';
                e.currentTarget.style.borderColor = '#F4C600';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#EAEAEA';
              }}
            >
              {/* Background Image */}
              <img
                src={project.coverImage}
                alt={project.title}
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

              {/* Dark Gradient Overlay for perfect typography contrast */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.2) 0%, rgba(10, 10, 10, 0.4) 40%, rgba(10, 10, 10, 0.94) 100%)',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
              />

              {/* Top Meta Bar */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  right: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              >
                <span
                  style={{
                    backgroundColor: 'rgba(10, 10, 10, 0.75)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    color: '#F4C600',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    border: '1px solid rgba(244, 198, 0, 0.3)'
                  }}
                >
                  {project.categoryLabel}
                </span>

                <span
                  style={{
                    backgroundColor: 'rgba(10, 10, 10, 0.75)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '5px 10px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  {project.imageCount} Photos
                </span>
              </div>

              {/* Bottom Content Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px 20px',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              >
                <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>
                  {project.location}
                </div>

                <h3
                  style={{
                    fontFamily: '"Bai Jamjuree", sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    margin: '0 0 6px 0',
                    lineHeight: 1.25
                  }}
                >
                  {project.title}
                </h3>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '12px',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <span style={{ color: '#F4C600', fontSize: '12px', fontWeight: 700 }}>
                    {project.area}
                  </span>

                  <span 
                    style={{ 
                      color: '#FFFFFF', 
                      fontSize: '12px', 
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    View Project &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        @media (min-width: 1200px) {
          .spacewora-projects-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 1199px) and (min-width: 860px) {
          .spacewora-projects-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 859px) and (min-width: 580px) {
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

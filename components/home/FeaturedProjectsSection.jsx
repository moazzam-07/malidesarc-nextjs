'use client';

import React from 'react';
import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/projectsData';

export default function FeaturedProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section 
      style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '100px 24px', 
        borderTop: '1px solid #EAEAEA',
        borderBottom: '1px solid #EAEAEA'
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
          <span 
            style={{ 
              color: '#F4C600', 
              fontSize: '13px', 
              fontWeight: 700, 
              letterSpacing: '3px', 
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '12px'
            }}
          >
            Curated Portfolio
          </span>
          <h2 
            style={{ 
              fontFamily: '"Bai Jamjuree", sans-serif', 
              fontSize: 'clamp(28px, 4vw, 44px)', 
              fontWeight: 700, 
              color: '#111111', 
              lineHeight: 1.2,
              margin: '0 0 18px 0'
            }}
          >
            Featured Turnkey Interior Projects
          </h2>
          <p style={{ color: '#555555', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
            Our turnkey approach brings bespoke architectural design, custom carpentry, and precision execution together under one seamless process. Explore our highlighted residential, commercial, and hospitality spaces.
          </p>
        </div>

        {/* 3x2 Featured Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px',
          }}
        >
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              style={{
                textDecoration: 'none',
                display: 'block',
                color: 'inherit'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '440px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EAEAEA',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
                  transition: 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#F4C600';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#EAEAEA';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.08)';
                }}
              >
                {/* Background Cover Image */}
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
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Dark Contrast Film */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.25) 0%, rgba(10, 10, 10, 0.45) 45%, rgba(10, 10, 10, 0.95) 100%)',
                    zIndex: 1,
                    pointerEvents: 'none'
                  }}
                />

                {/* Top Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '18px',
                    left: '18px',
                    right: '18px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'rgba(10, 10, 10, 0.8)',
                      backdropFilter: 'blur(8px)',
                      color: '#F4C600',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      border: '1px solid rgba(244, 198, 0, 0.35)'
                    }}
                  >
                    {project.categoryLabel}
                  </span>

                  <span
                    style={{
                      backgroundColor: 'rgba(10, 10, 10, 0.8)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '6px 12px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    {project.imageCount} Photos
                  </span>
                </div>

                {/* Bottom Details */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '28px 24px',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}
                >
                  <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                    {project.location}
                  </div>

                  <h3
                    style={{
                      fontFamily: '"Bai Jamjuree", sans-serif',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: '0 0 8px 0',
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
                      marginTop: '14px',
                      paddingTop: '14px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    <span style={{ color: '#F4C600', fontSize: '13px', fontWeight: 700 }}>
                      {project.area}
                    </span>

                    <span
                      style={{
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        letterSpacing: '0.5px'
                      }}
                    >
                      View Gallery &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link
            href="/our-project"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#0A0A0A',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              padding: '14px 36px',
              borderRadius: '30px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F4C600';
              e.currentTarget.style.color = '#0A0A0A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0A0A0A';
              e.currentTarget.style.color = '#FFFFFF';
            }}
          >
            <span>Explore All 11 Studio Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

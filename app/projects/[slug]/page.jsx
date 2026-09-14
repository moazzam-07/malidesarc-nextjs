import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_PROJECTS, getProjectBySlug } from '@/lib/projectsData';
import ProjectGallery from '@/components/projects/ProjectGallery';

export async function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | SPACEWORA Design Studio',
    };
  }

  return {
    title: `${project.title} | Luxury Interior Architecture | SPACEWORA Design Studio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | SPACEWORA Design Studio`,
      description: project.description,
      images: [
        {
          url: project.coverImage,
          width: 1920,
          height: 1080,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects for navigation
  const currentIndex = ALL_PROJECTS.findIndex((p) => p.slug === slug);
  const prevProject = ALL_PROJECTS[(currentIndex - 1 + ALL_PROJECTS.length) % ALL_PROJECTS.length];
  const nextProject = ALL_PROJECTS[(currentIndex + 1) % ALL_PROJECTS.length];

  return (
    <div style={{ backgroundColor: '#070707', color: '#FFFFFF', minHeight: '100vh', fontFamily: '"Quicksand", sans-serif' }}>
      {/* Project Hero Header */}
      <section 
        style={{
          position: 'relative',
          minHeight: '62vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '160px 24px 60px 24px',
          backgroundImage: `url('${project.coverImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          overflow: 'hidden'
        }}
      >
        {/* Dark Architectural Gradient Overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(7, 7, 7, 0.75) 0%, rgba(7, 7, 7, 0.5) 40%, rgba(7, 7, 7, 0.96) 100%)',
            zIndex: 1
          }} 
        />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1240px', width: '100%', margin: '0 auto' }}>
          {/* Breadcrumbs & Back link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px', flexWrap: 'wrap' }}>
            <Link 
              href="/our-project"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#F4C600',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                textDecoration: 'none',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '6px 14px',
                borderRadius: '20px',
                border: '1px solid rgba(244, 198, 0, 0.3)'
              }}
            >
              <span>&larr; All Projects</span>
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '13px' }}>/</span>
            <span style={{ color: '#E0E0E0', fontSize: '13px', fontWeight: 600 }}>{project.categoryLabel}</span>
          </div>

          {/* Title */}
          <h1 
            style={{
              fontFamily: '"Bai Jamjuree", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: '0 0 14px 0',
              lineHeight: 1.15
            }}
          >
            {project.title}
          </h1>

          {/* Tagline */}
          <p 
            style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              color: '#F4C600',
              fontWeight: 600,
              maxWidth: '820px',
              margin: '0 0 28px 0',
              lineHeight: 1.5
            }}
          >
            {project.tagline}
          </p>

          {/* Key Metrics Strip */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)'
            }}
          >
            <div style={{ backgroundColor: 'rgba(15, 15, 15, 0.7)', backdropFilter: 'blur(8px)', padding: '10px 18px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Location</div>
              <div style={{ fontSize: '14px', color: '#FFF', fontWeight: 600, marginTop: '2px' }}>{project.location}</div>
            </div>

            <div style={{ backgroundColor: 'rgba(15, 15, 15, 0.7)', backdropFilter: 'blur(8px)', padding: '10px 18px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Typology / Area</div>
              <div style={{ fontSize: '14px', color: '#FFF', fontWeight: 600, marginTop: '2px' }}>{project.area}</div>
            </div>

            <div style={{ backgroundColor: 'rgba(15, 15, 15, 0.7)', backdropFilter: 'blur(8px)', padding: '10px 18px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Scope</div>
              <div style={{ fontSize: '14px', color: '#FFF', fontWeight: 600, marginTop: '2px' }}>Turnkey Architecture & Interior Design</div>
            </div>

            <div style={{ backgroundColor: 'rgba(15, 15, 15, 0.7)', backdropFilter: 'blur(8px)', padding: '10px 18px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Completion</div>
              <div style={{ fontSize: '14px', color: '#F4C600', fontWeight: 700, marginTop: '2px' }}>{project.year}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Narrative & Design Highlights */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            marginBottom: '70px',
            backgroundColor: '#0F0F0F',
            padding: '36px',
            borderRadius: '16px',
            border: '1px solid rgba(244, 198, 0, 0.2)'
          }}
        >
          <div>
            <span style={{ color: '#F4C600', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Design Philosophy & Spatial Intent
            </span>
            <h2 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '24px', color: '#FFFFFF', margin: '8px 0 16px 0' }}>
              Crafted For Extraordinary Living
            </h2>
            <p style={{ color: '#C8C8C8', fontSize: '15px', lineHeight: 1.8, margin: 0 }}>
              {project.description}
            </p>
          </div>

          <div>
            <span style={{ color: '#F4C600', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Bespoke Specifications
            </span>
            <h3 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '24px', color: '#FFFFFF', margin: '8px 0 16px 0' }}>
              Architectural Highlights
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(244, 198, 0, 0.1)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(244, 198, 0, 0.35)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span style={{ color: '#F4C600' }}>&bull;</span>
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Gallery */}
        <ProjectGallery images={project.gallery} projectTitle={project.title} />

        {/* Next & Previous Project Navigation */}
        <div 
          style={{
            marginTop: '80px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          <Link
            href={`/projects/${prevProject.slug}`}
            style={{
              display: 'block',
              textDecoration: 'none',
              backgroundColor: '#121212',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ color: '#888', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              &larr; Previous Project
            </div>
            <div style={{ color: '#FFF', fontSize: '18px', fontWeight: 700, fontFamily: '"Bai Jamjuree", sans-serif', marginTop: '6px' }}>
              {prevProject.title}
            </div>
            <div style={{ color: '#F4C600', fontSize: '13px', marginTop: '4px' }}>
              {prevProject.categoryLabel} &bull; {prevProject.location}
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            style={{
              display: 'block',
              textDecoration: 'none',
              backgroundColor: '#121212',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'right',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ color: '#888', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Next Project &rarr;
            </div>
            <div style={{ color: '#FFF', fontSize: '18px', fontWeight: 700, fontFamily: '"Bai Jamjuree", sans-serif', marginTop: '6px' }}>
              {nextProject.title}
            </div>
            <div style={{ color: '#F4C600', fontSize: '13px', marginTop: '4px' }}>
              {nextProject.categoryLabel} &bull; {nextProject.location}
            </div>
          </Link>
        </div>

        {/* Call to Action Banner */}
        <div 
          style={{
            marginTop: '60px',
            padding: '50px 30px',
            borderRadius: '16px',
            backgroundColor: '#0F0F0F',
            border: '1px solid rgba(244, 198, 0, 0.35)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ color: '#F4C600', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
            Transform Your Space
          </div>
          <h2 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#FFFFFF', margin: '0 0 16px 0' }}>
            Ready To Design Your Timeless Environment?
          </h2>
          <p style={{ color: '#A0A0A0', fontSize: '15px', maxWidth: '640px', margin: '0 auto 28px auto', lineHeight: 1.6 }}>
            Whether you are planning a bespoke residence, high-impact commercial headquarters, or luxury hospitality venue, our studio delivers turnkey excellence from concept to final finish.
          </p>
          <Link
            href="/contact-us"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              padding: '14px 34px',
              borderRadius: '30px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
            }}
          >
            <span>Book Free Consultation</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

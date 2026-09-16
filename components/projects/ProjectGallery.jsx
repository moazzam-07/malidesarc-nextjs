'use client';

import React, { useState, useEffect, useCallback } from 'react';

export default function ProjectGallery({ images, projectTitle }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % images.length);
    }
  }, [lightboxIndex, images.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: '50px' }}>
      {/* Gallery Header */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          marginBottom: '28px',
          paddingBottom: '16px',
          borderBottom: '1px solid #E5E7EB',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div>
          <span style={{ color: '#F4C600', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Visual Showcase
          </span>
          <h2 style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '26px', color: '#111111', margin: '4px 0 0 0' }}>
            Project Gallery ({images.length} Photos)
          </h2>
        </div>
        <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 500 }}>
          Click any photo to open full-screen lightbox
        </div>
      </div>

      {/* Masonry-Style Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '20px',
        }}
      >
        {images.map((img, idx) => {
          const isLandscape = img.width >= img.height;
          return (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                aspectRatio: isLandscape ? '16/11' : '3/4',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#F4C600';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.05)';
              }}
            >
              <img
                src={img.src}
                alt={img.alt || `${projectTitle} photo ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              
              {/* Photo number pill */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(10, 10, 10, 0.75)',
                  backdropFilter: 'blur(6px)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  pointerEvents: 'none'
                }}
              >
                {idx + 1} / {images.length}
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: 'rgba(5, 5, 5, 0.94)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          {/* Top Bar with title & close button */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 28px',
              zIndex: 10
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span style={{ color: '#F4C600', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                {projectTitle}
              </span>
              <div style={{ color: '#FFF', fontSize: '14px', fontWeight: 600 }}>
                Photo {lightboxIndex + 1} of {images.length}
              </div>
            </div>

            <button
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '18px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F4C600';
                e.currentTarget.style.color = '#0A0A0A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              &times;
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous Image"
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'rgba(20, 20, 20, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '22px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F4C600';
              e.currentTarget.style.color = '#0A0A0A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(20, 20, 20, 0.7)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
          >
            &#8249;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next Image"
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'rgba(20, 20, 20, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '22px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F4C600';
              e.currentTarget.style.color = '#0A0A0A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(20, 20, 20, 0.7)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
          >
            &#8250;
          </button>

          {/* Main Active Image */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '80vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img 
              src={images[lightboxIndex].src} 
              alt={images[lightboxIndex].alt || `${projectTitle} photo`} 
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9)'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

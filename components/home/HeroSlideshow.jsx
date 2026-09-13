'use client';

import { useState, useEffect } from 'react';

const SLIDES = [
  '/wp-content/uploads/2026/08/Bandra-House.webp',
  '/wp-content/uploads/2026/08/dgs-gurudarshan-sales-office-open-lounge-interior.webp',
  '/wp-content/uploads/2026/08/rudra-sales-office-meeting-room-scaled-1.webp',
  '/wp-content/uploads/2026/08/unnamed-file-1-scaled-1.webp',
  '/wp-content/uploads/2026/08/vensco-sample-flat-dining-area-interior.webp',
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="elementor-background-slideshow swiper"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div className="swiper-wrapper" style={{ width: '100%', height: '100%', position: 'relative' }}>
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`elementor-background-slideshow__slide swiper-slide ${
              idx === currentIndex ? 'elementor-slide-active' : ''
            }`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: idx === currentIndex ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              zIndex: idx === currentIndex ? 1 : 0,
            }}
          >
            <div
              className="elementor-background-slideshow__slide__image"
              style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundImage: `url("${slide}")`,
              }}
            />
          </div>
        ))}
      </div>
      {/* Dark tint overlay */}
      <div
        className="elementor-background-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          zIndex: 2,
        }}
      />
    </div>
  );
}


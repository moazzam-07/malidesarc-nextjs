'use client';

import { useState, useEffect } from 'react';

const SLIDES = [
  '/images/homepage/hero-slide-01.jpg',
  '/images/homepage/hero-slide-02.jpg',
  '/images/homepage/hero-slide-03.jpg',
  '/images/homepage/hero-slide-04.jpg',
  '/images/homepage/hero-slide-05.jpg',
  '/images/homepage/hero-slide-06.jpg',
  '/images/homepage/hero-slide-07.jpg',
  '/images/homepage/hero-slide-08.jpg',
  '/images/homepage/hero-slide-09.jpg',
  '/images/homepage/hero-slide-10.jpg',
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
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
              transition: 'opacity 1.4s ease-in-out',
              zIndex: idx === currentIndex ? 1 : 0,
            }}
          >
            <div
              className="elementor-background-slideshow__slide__image"
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url('${slide}')`,
                backgroundPosition: 'center 40%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                transform: idx === currentIndex ? 'scale(1.04)' : 'scale(1.0)',
                transition: 'transform 7s ease-out',
              }}
            />
          </div>
        ))}
      </div>

      {/* Luminous Warm Film Overlay: preserves authentic interior illumination & vibrant architecture while providing crisp text contrast */}
      <div
        className="elementor-background-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.18) 35%, rgba(0, 0, 0, 0.22) 65%, rgba(0, 0, 0, 0.52) 100%)',
          zIndex: 1,
        }}
      />
    </div>
  );
}

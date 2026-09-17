'use client';

import { useState, useEffect } from 'react';

const SLIDES = [
  '/wp-content/uploads/2026/08/Bandra-House.webp',
  '/images/homepage/hero_01_enscape_2023-06-14-01-34-23.webp',
  '/images/homepage/hero_02_img-20230204-wa0008.webp',
  '/images/homepage/hero_03_img-20230208-wa0046.webp',
  '/images/homepage/hero_07_img-20230305-wa0028.webp',
  '/images/homepage/hero_09_img-20230322-wa0022.webp',
  '/images/homepage/hero_13_picture4.webp',
  '/images/homepage/hero_05_img-20230210-wa0007.webp',
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

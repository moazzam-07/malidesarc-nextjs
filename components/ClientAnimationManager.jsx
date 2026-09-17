'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

export default function ClientAnimationManager() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. GSAP ScrollTrigger Heading Highlight
    const headings = gsap.utils.toArray('.elementor-heading-title');
    const triggers = [];

    headings.forEach((text, index) => {
      const style = window.getComputedStyle(text);
      if (style.backgroundImage && style.backgroundImage !== 'none') {
        gsap.set(text, { backgroundSize: '0% 100%' });
        const tween = gsap.to(text, {
          backgroundSize: '100% 100%',
          ease: 'none',
          scrollTrigger: {
            trigger: text,
            id: 'heading-highlight-' + index,
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        if (tween.scrollTrigger) {
          triggers.push(tween.scrollTrigger);
        }
      }
    });

    ScrollTrigger.refresh();

    // 2. Rotating Headline Loop
    let rotateInterval;
    const headlineWrapper = document.querySelector('.elementor-headline-dynamic-wrapper');
    if (headlineWrapper) {
      const words = headlineWrapper.querySelectorAll('.elementor-headline-dynamic-text');
      if (words.length > 1) {
        let currentIndex = 0;
        rotateInterval = setInterval(() => {
          words[currentIndex].classList.remove('elementor-headline-text-active');
          currentIndex = (currentIndex + 1) % words.length;
          words[currentIndex].classList.add('elementor-headline-text-active');
        }, 2500);
      }
    }

    // 3. Entrance Animations Observer (Fix for .elementor-invisible)
    const invisibleEls = document.querySelectorAll('.elementor-invisible');
    const animObservers = [];

    invisibleEls.forEach((el) => {
      let animName = 'fadeInUp';
      let animDelay = 0;

      const rawSettings = el.getAttribute('data-settings');
      if (rawSettings) {
        try {
          const settings = JSON.parse(rawSettings);
          animName = settings._animation || settings.animation || animName;
          animDelay = parseInt(settings._animation_delay || settings.animation_delay || 0, 10);
        } catch {
          if (rawSettings.includes('fadeInLeft')) animName = 'fadeInLeft';
          else if (rawSettings.includes('fadeInRight')) animName = 'fadeInRight';
          else if (rawSettings.includes('fadeInDown')) animName = 'fadeInDown';
          else if (rawSettings.includes('fadeIn')) animName = 'fadeIn';
        }
      }

      const reveal = () => {
        if (animDelay > 0) {
          el.style.animationDelay = `${animDelay}ms`;
        }
        el.classList.remove('elementor-invisible');
        el.classList.add('animated', animName);
      };

      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
        reveal();
      } else {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                reveal();
                obs.unobserve(el);
              }
            });
          },
          { rootMargin: '80px 0px 80px 0px', threshold: 0.05 }
        );
        obs.observe(el);
        animObservers.push(obs);
      }
    });

    const safeguardTimer = setTimeout(() => {
      document.querySelectorAll('.elementor-invisible').forEach((el) => {
        el.classList.remove('elementor-invisible');
        el.classList.add('animated', 'fadeIn');
      });
    }, 1500);

    // 4. Text Reveal (About Page Design Process paragraph)
    const textRevealEls = document.querySelectorAll('.text-reveal');
    textRevealEls.forEach((el) => {
      gsap.set(el, { opacity: 1 });
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    // 5. Animated Counters (Count-up numbers on scroll)
    const counterElements = document.querySelectorAll('.elementor-counter-number');
    const counterObservers = [];

    counterElements.forEach((el) => {
      const fromVal = parseFloat(el.getAttribute('data-from-value') || '0');
      const toVal = parseFloat(
        el.getAttribute('data-to-value') || el.textContent.trim().replace(/[^0-9.]/g, '') || '0'
      );
      const duration = parseInt(el.getAttribute('data-duration') || '2000', 10);
      const delimiter = el.getAttribute('data-delimiter') || ',';

      const formatVal = (val) => (delimiter ? Math.round(val).toLocaleString() : Math.round(val).toString());

      const animateCounter = () => {
        let startTime = null;

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const easeOutQuad = 1 - (1 - progress) * (1 - progress);
          const currentVal = fromVal + (toVal - fromVal) * easeOutQuad;

          el.textContent = formatVal(currentVal);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = formatVal(toVal);
          }
        }

        requestAnimationFrame(step);
      };

      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
        animateCounter();
      } else {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animateCounter();
                obs.unobserve(el);
              }
            });
          },
          { rootMargin: '80px 0px 80px 0px', threshold: 0.05 }
        );
        obs.observe(el);
        counterObservers.push(obs);
      }
    });

    const safeguardCounterTimer = setTimeout(() => {
      document.querySelectorAll('.elementor-counter-number').forEach((el) => {
        const toVal = parseFloat(el.getAttribute('data-to-value') || '0');
        if (toVal > 0) {
          const delimiter = el.getAttribute('data-delimiter') || ',';
          el.textContent = delimiter ? Math.round(toVal).toLocaleString() : Math.round(toVal).toString();
        }
      });
    }, 2500);

    // 6. Swiper Carousels Initialization
    const swiperInstances = [];

    // A. Services & Team Carousels
    const servicesContainers = document.querySelectorAll(
      '.services-carousel .swiper, .services-carousel.swiper, .testimonial-links .swiper'
    );
    servicesContainers.forEach((container) => {
      const prevBtn =
        container.parentElement?.querySelector('.elementor-swiper-button-prev') ||
        container.querySelector('.elementor-swiper-button-prev') ||
        '.elementor-swiper-button-prev';
      const nextBtn =
        container.parentElement?.querySelector('.elementor-swiper-button-next') ||
        container.querySelector('.elementor-swiper-button-next') ||
        '.elementor-swiper-button-next';

      const s = new Swiper(container, {
        modules: [Autoplay, Navigation],
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        speed: 600,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        },
      });
      swiperInstances.push(s);
    });

    // B. Client Logos Carousel (infinite marquee)
    const logoContainers = document.querySelectorAll('.client-logo-carousel .swiper, .client-logo-carousel.swiper');
    logoContainers.forEach((container) => {
      const s = new Swiper(container, {
        modules: [Autoplay],
        slidesPerView: 2,
        spaceBetween: 24,
        slidesPerView: 3,
        spaceBetween: 34,
        loop: true,
        speed: 5000,
        speed: 7000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        },
        breakpoints: {
          640: { slidesPerView: 3, spaceBetween: 30 },
          0: { slidesPerView: 3, spaceBetween: 34 },
          768: { slidesPerView: 4, spaceBetween: 34 },
          1024: { slidesPerView: 6, spaceBetween: 34 },
        },
      });
      swiperInstances.push(s);
    });

    // C. General Testimonial Carousels
    const testimonialContainers = document.querySelectorAll(
      '.elementor-widget-testimonial-carousel:not(.services-carousel):not(.testimonial-links) .swiper'
    );
    testimonialContainers.forEach((container) => {
      const prevBtn =
        container.parentElement?.querySelector('.elementor-swiper-button-prev') ||
        '.elementor-swiper-button-prev';
      const nextBtn =
        container.parentElement?.querySelector('.elementor-swiper-button-next') ||
        '.elementor-swiper-button-next';

      const s = new Swiper(container, {
        modules: [Autoplay, Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 700,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 20 },
        },
      });
      swiperInstances.push(s);
    });

    // D. Image Carousels (e.g. Design Process carousel on About page)
    const imageCarousels = document.querySelectorAll(
      '.elementor-widget-image-carousel:not(.client-logo-carousel) .swiper, .elementor-widget-image-carousel:not(.client-logo-carousel).swiper'
    );
    imageCarousels.forEach((container) => {
      const s = new Swiper(container, {
        modules: [Autoplay, Pagination],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 600,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: container.querySelector('.swiper-pagination') || '.swiper-pagination',
          clickable: true,
        },
      });
      swiperInstances.push(s);
    });

    // Cleanup on unmount or route change
    return () => {
      if (rotateInterval) clearInterval(rotateInterval);
      clearTimeout(safeguardTimer);
      clearTimeout(safeguardCounterTimer);
      animObservers.forEach((obs) => obs.disconnect());
      counterObservers.forEach((obs) => obs.disconnect());
      triggers.forEach((trig) => {
        try { trig.kill(); } catch (e) {}
      });
      swiperInstances.forEach((s) => {
        try { s.destroy(true, true); } catch (e) {}
      });
    };
  }, [pathname]);

  return null;
}

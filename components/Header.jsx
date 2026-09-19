'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useMobileMenu } from './MobileMenuContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { isOpen: isMobileMenuOpen, openMenu } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Dark solid background after scrolling past 40px
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide / Reveal behavior:
      // When at or near top (scrollY <= 60), always keep visible
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 90) {
        // Scrolling DOWN -> Slide UP & disappear
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP -> Slide DOWN into view
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVisibilityClass = (isVisible || isMobileMenuOpen) ? 'header-visible' : 'header-hidden';

  return (
    <header 
      className="elementor elementor-6886 elementor-location-header" 
      data-elementor-id="6886" 
      data-elementor-post-type="elementor_library" 
      data-elementor-type="header"
    >
      <div 
        className={`elementor-element elementor-element-a2436b7 dynamic-header e-con-full e-flex e-con e-parent ${isScrolled ? "scrolled" : ""} ${headerVisibilityClass}`} 
        data-e-type="container" 
        data-element_type="container" 
        data-id="a2436b7" 
        data-settings='{"background_background":"classic","sticky_parent":"yes","sticky":"top","sticky_on":["desktop","laptop","tablet","mobile"],"sticky_offset":0,"sticky_effects_offset":0,"sticky_anchor_link_offset":0}'
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'nowrap',
          width: '100%',
          padding: '10px 20px',
          boxSizing: 'border-box'
        }}
      >
        {/* Brand Logo Container */}
        <div 
          className="elementor-element elementor-element-5caf2c5 e-con-full e-flex e-con e-child" 
          data-e-type="container" 
          data-element_type="container" 
          data-id="5caf2c5" 
          data-settings='{"background_background":"classic"}'
          style={{
            flex: '0 0 auto',
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            margin: 0,
            padding: 0
          }}
        >
          <a href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', padding: '2px 0' }}>
            <img 
              src="/spacewora-logo-white-text.svg" 
              alt="SPACWORA Design Studio" 
              style={{ 
                height: 'clamp(38px, 3.6vw, 44px)', 
                width: 'auto', 
                maxWidth: '220px', 
                objectFit: 'contain', 
                display: 'block',
                transition: 'all 0.3s ease'
              }} 
            />
          </a>
        </div>

        {/* Navigation Menu */}
        <div className="elementor-element elementor-element-ce5d956 e-con-full elementor-hidden-mobile elementor-hidden-tablet e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="ce5d956">
          <div className="elementor-element elementor-element-322d3c8 .elementor-nav-menu elementor-hidden-mobile elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-e-type="widget" data-element_type="widget" data-id="322d3c8" data-settings='{"full_width":"stretch","layout":"horizontal"}'>
            <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
              <ul className="elementor-nav-menu" id="menu-1-322d3c8">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-11027">
                  <a className="elementor-item" href="/our-services/">
                    Our Services
                    <span className="sub-arrow">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                      </svg>
                    </span>
                  </a>
                  <ul className="sub-menu elementor-nav-menu--dropdown">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom">
                      <a className="elementor-sub-item elementor-item-anchor" href="/our-services#residential">
                        Residential
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom">
                      <a className="elementor-sub-item elementor-item-anchor" href="/our-services#commercial">
                        Commercial
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom">
                      <a className="elementor-sub-item elementor-item-anchor" href="/our-services#hospitality">
                        Hospitality
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom">
                      <a className="elementor-sub-item elementor-item-anchor" href="/our-services#penthouse">
                        Penthouse
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom">
                      <a className="elementor-sub-item elementor-item-anchor" href="/our-services#turnkey-project">
                        Turnkey Project
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom">
                      <a className="elementor-sub-item elementor-item-anchor" href="/our-services#exhibition">
                        Exhibition
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10294">
                  <a className="elementor-item" href="/our-project/">
                    Our Projects
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-221">
                  <a className="elementor-item" href="/about/">
                    About Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div 
          className="elementor-element elementor-element-6fcbaf5 elementor-hidden-desktop elementor-hidden-laptop" 
          data-e-type="widget" 
          data-element_type="widget" 
          data-id="6fcbaf5"
          style={{
            flex: '0 0 auto',
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            margin: 0,
            marginLeft: 'auto',
            padding: 0,
            position: 'relative',
            zIndex: 999
          }}
        >
          <button 
            type="button" 
            aria-label="Open Mobile Menu" 
            onClick={openMenu} 
            style={{ 
              background: "rgba(255, 255, 255, 0.06)", 
              border: "1px solid rgba(244, 198, 0, 0.4)", 
              borderRadius: "8px",
              cursor: "pointer", 
              width: "42px",
              height: "42px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              position: 'relative',
              zIndex: 1000
            }}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
              <line x1="0" y1="1" x2="20" y2="1" stroke="#F4C600" strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="0" y1="7" x2="20" y2="7" stroke="#F4C600" strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="0" y1="13" x2="20" y2="13" stroke="#F4C600" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Call To Action Button (Desktop & Tablet) */}
        <div className="elementor-element elementor-element-f0b51aa e-con-full elementor-hidden-mobile e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f0b51aa">
          <div className="elementor-element elementor-element-fb5d8d8 elementor-align-right elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="fb5d8d8" data-widget_type="button.default" style={{ padding: 0 }}>
            <a 
              className="elementor-button elementor-button-link elementor-size-sm" 
              href="/contact/"
              style={{
                padding: '9px 20px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.5px',
                borderRadius: '24px',
                backgroundColor: '#FFFFFF',
                color: '#0A0A0A',
                border: '2px solid #FFFFFF',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F4C600';
                e.currentTarget.style.borderColor = '#F4C600';
                e.currentTarget.style.color = '#0A0A0A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.borderColor = '#FFFFFF';
                e.currentTarget.style.color = '#0A0A0A';
              }}
            >
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">
                  Book Consultation
                </span>
              </span>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}

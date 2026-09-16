'use client';

import React from 'react';
import Link from 'next/link';
import { useMobileMenu } from './MobileMenuContext';

export default function MobileMenuPopup() {
  const { isOpen, closeMenu } = useMobileMenu();

  if (!isOpen) return null;

  return (
    <div 
      className="dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-popup-modal"
      id="elementor-popup-modal-7903"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeMenu();
        }
      }}
    >
      <div className="dialog-widget-content dialog-lightbox-widget-content" style={{ position: 'relative', width: '100%', maxWidth: '100%', minHeight: '100vh', display: 'flex' }}>
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
          style={{
            position: 'fixed',
            top: '25px',
            right: '25px',
            zIndex: 100000,
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#ffffff',
            fontSize: '24px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
        >
          &times;
        </button>
        <div className="dialog-message dialog-lightbox-message" style={{ width: '100%' }}>
          <div className="elementor elementor-7903 elementor-location-popup" data-elementor-id="7903" data-elementor-post-type="elementor_library" data-elementor-type="popup" style={{ display: 'block', width: '100%', minHeight: '100vh' }}>
            <div className="elementor-element elementor-element-9176d2a e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="9176d2a" data-settings='{"background_background":"classic"}'>
    <div className="e-con-inner">
      <div className="elementor-element elementor-element-23d46bf e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="23d46bf">
        <div className="elementor-element elementor-element-0a953a0" data-e-type="widget" data-element_type="widget" data-id="0a953a0" style={{ padding: '10px 0' }}>
          <a href="/" onClick={closeMenu} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
            <img 
              src="/spacewora-logo-white-text.svg" 
              alt="SPACEWORA Design Studio" 
              style={{ 
                height: '54px', 
                width: 'auto', 
                maxWidth: '230px', 
                objectFit: 'contain', 
                display: 'block' 
              }} 
            />
          </a>
        </div>
      </div>
      <div className="elementor-element elementor-element-b8ff52f e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="b8ff52f">
        <div className="elementor-element elementor-element-3074b0f elementor-align-center elementor-mobile-align-start elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="3074b0f" data-widget_type="icon-list.default">
          <ul className="elementor-icon-list-items">
            <li className="elementor-icon-list-item">
              <a href="/" onClick={closeMenu}>
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="jki jki-checkmark-circle-light"></i>
                </span>
                <span className="elementor-icon-list-text">
                  Home
                </span>
              </a>
            </li>
            <li className="elementor-icon-list-item">
              <a href="/our-project/" onClick={closeMenu}>
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="jki jki-checkmark-circle-light"></i>
                </span>
                <span className="elementor-icon-list-text" style={{ color: '#F4C600', fontWeight: 600 }}>
                  Our Projects
                </span>
              </a>
            </li>
            <li className="elementor-icon-list-item">
              <a href="/our-services/" onClick={closeMenu}>
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="jki jki-checkmark-circle-light"></i>
                </span>
                <span className="elementor-icon-list-text">
                  Our Services
                </span>
              </a>
            </li>
            <li className="elementor-icon-list-item">
              <a href="/about/" onClick={closeMenu}>
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="jki jki-checkmark-circle-light"></i>
                </span>
                <span className="elementor-icon-list-text">
                  About Us
                </span>
              </a>
            </li>
            <li className="elementor-icon-list-item">
              <a href="/teams/" onClick={closeMenu}>
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="jki jki-checkmark-circle-light"></i>
                </span>
                <span className="elementor-icon-list-text">
                  Team
                </span>
              </a>
            </li>
            <li className="elementor-icon-list-item">
              <a href="/contact/" onClick={closeMenu}>
                <span className="elementor-icon-list-icon">
                  <i aria-hidden="true" className="jki jki-checkmark-circle-light"></i>
                </span>
                <span className="elementor-icon-list-text">
                  Contact Us
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div style={{ marginTop: '20px', padding: '0 10px' }}>
          <a 
            href="/contact/" 
            onClick={closeMenu}
            style={{
              display: 'block',
              textAlign: 'center',
              backgroundColor: '#F4C600',
              color: '#0A0A0A',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            Book Consultation
          </a>
        </div>
        <div className="elementor-element elementor-element-b298139 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="b298139" data-widget_type="heading.default" style={{ marginTop: '25px' }}>
          <span className="elementor-heading-title elementor-size-default" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '13px' }}>
            Copyright © 2026 SPACEWORA Design Studio.
            <br />
            All rights reserved.
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

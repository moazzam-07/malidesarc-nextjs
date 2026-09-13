'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMobileMenu } from './MobileMenuContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openMenu } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<header className="elementor elementor-6886 elementor-location-header" data-elementor-id="6886" data-elementor-post-type="elementor_library" data-elementor-type="header">
  <div className={`elementor-element elementor-element-a2436b7 dynamic-header e-con-full e-flex e-con e-parent ${isScrolled ? "scrolled" : ""}`} data-e-type="container" data-element_type="container" data-id="a2436b7" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;sticky_parent&quot;:&quot;yes&quot;,&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;laptop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0,&quot;sticky_anchor_link_offset&quot;:0}">
    <div className="elementor-element elementor-element-5caf2c5 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="5caf2c5" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" style={{ paddingLeft: '8px' }}>
        <a href="/" style={{ textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', padding: '6px 0' }}>
          <span style={{ fontFamily: '"Bai Jamjuree", sans-serif', fontSize: '24px', fontWeight: 700, letterSpacing: '2px', color: '#FFFFFF', lineHeight: 1 }}>
            SPACE<span style={{ color: '#F4C600' }}>WORA</span>
          </span>
          <span style={{ fontFamily: '"Quicksand", sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '3px', color: '#F4C600', textTransform: 'uppercase', marginTop: '4px' }}>
            DESIGN STUDIO
          </span>
        </a>
    </div>
    <div className="elementor-element elementor-element-ce5d956 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="ce5d956">
      <div className="elementor-element elementor-element-322d3c8 .elementor-nav-menu elementor-hidden-mobile elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-e-type="widget" data-element_type="widget" data-id="322d3c8" data-settings="{&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<svg aria-hidden=\&quot;true\&quot; class=\&quot;e-font-icon-svg e-fas-caret-down\&quot; viewBox=\&quot;0 0 320 512\&quot; xmlns=\&quot;http:\/\/www.w3.org\/2000\/svg\&quot;><path d=\&quot;M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\&quot;><\/path><\/svg>&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">
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
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13029">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#Commercial">
                    Commercial
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13031">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#sales-office">
                    Sales Office
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13030">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#Hospitality">
                    Hospitality
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13032">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#show-flats">
                    Show Flats
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11041">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#civil-interiors">
                    Civil & Interiors
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11042">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#electricals">
                    Electricals
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11043">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#fire-fighting-system">
                    Fire Fighting System
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11044">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#hvac">
                    HVAC
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11045">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#steel-structure">
                    Steel Structure
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11046">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#exterior-glazing">
                    Exterior Glazing
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11047">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#exterior-facade">
                    Exterior Facade
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11048">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#roofing">
                    Roofing
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13033">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#Residentials">
                    Residentials
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
        <div aria-expanded="false" aria-label="Menu Toggle" className="elementor-menu-toggle" role="button" tabIndex="0">
          <svg aria-hidden="true" className="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar" role="presentation" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z" />
          </svg>
          <svg aria-hidden="true" className="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close" role="presentation" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z" />
          </svg>
        </div>
        <nav aria-hidden="true" className="elementor-nav-menu--dropdown elementor-nav-menu__container">
          <ul className="elementor-nav-menu" id="menu-2-322d3c8">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-11027">
              <a className="elementor-item" href="/our-services/" tabIndex="-1">
                Our Services
                <span className="sub-arrow">
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                  </svg>
                </span>
              </a>
              <ul className="sub-menu elementor-nav-menu--dropdown">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13029">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#Commercial" tabIndex="-1">
                    Commercial
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13031">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#sales-office" tabIndex="-1">
                    Sales Office
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13030">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#Hospitality" tabIndex="-1">
                    Hospitality
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13032">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#show-flats" tabIndex="-1">
                    Show Flats
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11041">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#civil-interiors" tabIndex="-1">
                    Civil & Interiors
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11042">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#electricals" tabIndex="-1">
                    Electricals
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11043">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#fire-fighting-system" tabIndex="-1">
                    Fire Fighting System
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11044">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#hvac" tabIndex="-1">
                    HVAC
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11045">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#steel-structure" tabIndex="-1">
                    Steel Structure
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11046">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#exterior-glazing" tabIndex="-1">
                    Exterior Glazing
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11047">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#exterior-facade" tabIndex="-1">
                    Exterior Facade
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11048">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#roofing" tabIndex="-1">
                    Roofing
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13033">
                  <a className="elementor-sub-item elementor-item-anchor" href="/our-services#Residentials" tabIndex="-1">
                    Residentials
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10294">
              <a className="elementor-item" href="/our-project/" tabIndex="-1">
                Our Projects
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-221">
              <a className="elementor-item" href="/about/" tabIndex="-1">
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="elementor-element elementor-element-6fcbaf5 elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-view-default elementor-widget elementor-widget-icon" data-e-type="widget" data-element_type="widget" data-id="6fcbaf5" data-widget_type="icon.default">
        <div className="elementor-icon-wrapper">
          <button type="button" aria-label="Open Menu" onClick={openMenu} className="elementor-icon" style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <svg aria-hidden="true" className="e-font-icon-svg e-fas-bars" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="elementor-element elementor-element-f0b51aa e-con-full elementor-hidden-mobile e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f0b51aa">
      <div className="elementor-element elementor-element-fb5d8d8 elementor-align-right elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="fb5d8d8" data-widget_type="button.default">
        <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" href="/contact/">
          <span className="elementor-button-content-wrapper">
            <span className="elementor-button-text">
              Book Consultation
            </span>
          </span>
        </a>
      </div>
    </div>
    <div className="elementor-element elementor-element-1f738fa elementor-widget elementor-widget-html" data-e-type="widget" data-element_type="widget" data-id="1f738fa" data-widget_type="html.default"></div>
  </div>
</header>

  );
}

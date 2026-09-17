import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Our Services | SPACEWORA Design Studio",
  description: "Explore SPACEWORA's bespoke architectural & interior services: Residential, Commercial, Hospitality, Penthouse, Turnkey Projects, and Exhibition Design.",
};

const studioServices = [
  {
    id: "residential",
    title: "Residential",
    tagline: "Bespoke Luxury Residences, Apartments & Private Villas",
    description: "We curate high-end residences shaped around how modern families live, entertain, and recharge. From expansive multi-level villas to luxury high-rise apartments, our design studio orchestrates bespoke spatial planning, integrated custom joinery, exquisite marble finishes, fluted acoustic paneling, and circadian lighting systems that transform residences into enduring sanctuaries.",
    image: "/wp-content/uploads/2026/08/emerald-isle-residential-project-open-living-dining-area-scaled-1.webp",
    imageAlt: "SPACEWORA Residential Interior Design"
  },
  {
    id: "commercial",
    title: "Commercial",
    tagline: "Corporate Headquarters, Executive Boardrooms & Modern Workspaces",
    description: "We design high-impact corporate environments that embody company prestige, foster team productivity, and inspire everyday collaboration. Combining state-of-the-art acoustic management, ergonomic layout planning, technology-integrated boardrooms, and dramatic reception lounges, our commercial spaces deliver measurable excellence.",
    image: "/images/studio/spacwora-boardroom.webp",
    imageAlt: "SPACEWORA Commercial Architecture and Executive Suites"
  },
  {
    id: "hospitality",
    title: "Hospitality",
    tagline: "Boutique Hotels, Grand Lobbies, Fine Dining & Luxury Lounges",
    description: "Extraordinary hospitality begins with sensory impact and effortless spatial flow. We create unforgettable environments for luxury dining, boutique hotel lounges, signature cocktail bars, and reception lobbies. Every detail—from custom sculptural lighting and tactile wall finishes to ambient acoustic balance—is meticulously calibrated for guest delight.",
    image: "/images/studio/spacwora-hospitality-grand-lobby.webp",
    imageAlt: "SPACEWORA Hospitality Interior Design and Grand Lobbies"
  },
  {
    id: "penthouse",
    title: "Penthouse",
    tagline: "Sky Residences, Panoramic Terraces & Double-Height Living",
    description: "Penthouse design demands an elevated architectural vision. We specialize in transforming soaring sky residences into masterpieces of modern luxury, incorporating double-height glass elevations, statement sculptural floating staircases, seamless indoor-outdoor panoramic terrace lounges, and bespoke master suites tailored to panoramic city views.",
    image: "/images/homepage/hero_01_enscape_2023-06-14-01-34-23.webp",
    imageAlt: "SPACEWORA Luxury Penthouse and Sky Residence Architecture"
  },
  {
    id: "turnkey-project",
    title: "Turnkey Project",
    tagline: "Complete End-to-End Architectural Execution & Handover",
    description: "Experience total peace of mind with our end-to-end turnkey project delivery. From concept blueprints and photo-realistic 3D visualizations to civil renovation, bespoke joinery, on-site MEP supervision, premium material sourcing, and white-glove styling, our single-point accountability guarantees flawless delivery on time and with zero compromise on craftsmanship.",
    image: "/images/studio/spacwora-reception-main.webp",
    imageAlt: "SPACEWORA Turnkey Interior Project Execution and Delivery"
  },
  {
    id: "exhibition",
    title: "Exhibition",
    tagline: "Brand Experience Pavilions & Experiential Installations",
    description: "Transform your brand into a captivating spatial journey. We conceive, engineer, and execute bespoke exhibition pavilions, interactive trade show booths, and brand experience environments engineered for peak visual impact, maximum foot traffic, and memorable visitor immersion at major domestic and international expos.",
    image: "/images/studio/spacwora-hospitality-bar.webp",
    imageAlt: "SPACEWORA Exhibition and Experiential Pavilion Design"
  }
];

export default function OurServicesPage() {
  return (
    <>
      <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-6.css" />
      <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-7903.css" />
      <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-10816.css" />
      <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-6886.css" />
      <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-9770.css" />
      <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-11543.css" />

      <main className="site-main post-10816 page type-page status-publish hentry" id="content">
        <div className="page-content">
          <div className="elementor elementor-10816" data-elementor-id="10816" data-elementor-post-type="page" data-elementor-type="wp-page">
            
            {/* Hero Banner */}
            <div className="elementor-element elementor-element-a622f89 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="a622f89" data-settings='{"background_background":"classic"}' style={{ padding: '80px 20px 40px 20px' }}>
              <div className="e-con-inner" style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
                <div className="elementor-element elementor-element-bebbcd9 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="bebbcd9" data-widget_type="heading.default">
                  <h1 className="elementor-heading-title elementor-size-default" style={{ fontSize: 'clamp(2.4rem, 2.2rem + 2vw, 3.8rem)', fontWeight: 600, color: '#111111', lineHeight: 1.2 }}>
                    Our <span className="custom-amp" style={{ color: '#F4C600' }}>Services</span>
                  </h1>
                </div>
                <div className="elementor-element elementor-element-72082e7 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="72082e7" data-widget_type="text-editor.default" style={{ maxWidth: '750px', margin: '20px auto 0 auto' }}>
                  <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#555555' }}>
                    SPACEWORA delivers bespoke architecture, interior curation, and end-to-end turnkey execution across luxury residential, commercial, hospitality, penthouse, and exhibition projects.
                  </p>
                </div>
              </div>
            </div>

            {/* 6 Studio Services Cards */}
            <div className="elementor-element elementor-element-f782cf2 all-cards e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="f782cf2" style={{ padding: '20px 20px 80px 20px' }}>
              <div className="e-con-inner" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '50px' }}>
                
                {studioServices.map((service, index) => {
                  const isEven = index % 2 === 1;
                  return (
                    <div 
                      key={service.id}
                      id={service.id}
                      className="elementor-element e-flex e-con-boxed e-con e-child" 
                      data-e-type="container" 
                      data-element_type="container" 
                      style={{ 
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        padding: '0',
                        scrollMarginTop: '100px'
                      }}
                    >
                      <div 
                        className="e-con-inner"
                        style={{ 
                          display: 'flex', 
                          flexDirection: isEven ? 'row-reverse' : 'row',
                          flexWrap: 'wrap',
                          alignItems: 'stretch',
                          width: '100%'
                        }}
                      >
                        {/* Text Column */}
                        <div 
                          className="elementor-element e-con-full e-flex e-con e-child" 
                          data-e-type="container" 
                          data-element_type="container"
                          style={{
                            flex: '1 1 450px',
                            padding: 'clamp(28px, 4vw, 48px)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                          }}
                        >
                          <div style={{ marginBottom: '12px' }}>
                            <span 
                              style={{ 
                                display: 'inline-block',
                                fontSize: '12px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                color: '#0A0A0A',
                                backgroundColor: '#F4C600',
                                padding: '4px 14px',
                                borderRadius: '20px'
                              }}
                            >
                              0{index + 1} • Studio Service
                            </span>
                          </div>

                          <h2 
                            className="elementor-heading-title elementor-size-default"
                            style={{ 
                              fontSize: 'clamp(1.8rem, 1.6rem + 1vw, 2.4rem)',
                              fontWeight: 600,
                              color: '#111111',
                              margin: '8px 0 10px 0',
                              lineHeight: 1.25
                            }}
                          >
                            {service.title}
                          </h2>

                          <h3 
                            style={{ 
                              fontSize: '15px', 
                              fontWeight: 600, 
                              color: '#888888', 
                              marginBottom: '16px',
                              letterSpacing: '0.3px'
                            }}
                          >
                            {service.tagline}
                          </h3>

                          <div 
                            style={{
                              width: '50px',
                              height: '2px',
                              backgroundColor: '#F4C600',
                              marginBottom: '20px'
                            }} 
                          />

                          <p 
                            style={{ 
                              fontSize: '15px', 
                              lineHeight: 1.75, 
                              color: '#444444',
                              margin: '0 0 24px 0',
                              fontFamily: '"Quicksand", sans-serif'
                            }}
                          >
                            {service.description}
                          </p>

                          <div>
                            <Link 
                              href="/contact/"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '13px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                color: '#0A0A0A',
                                textDecoration: 'none',
                                padding: '10px 22px',
                                borderRadius: '24px',
                                border: '1.5px solid #0A0A0A',
                                transition: 'all 0.25s ease'
                              }}
                              className="service-cta-btn"
                            >
                              Consult On This Service →
                            </Link>
                          </div>
                        </div>

                        {/* Image Column */}
                        <div 
                          className="elementor-element e-con-full e-flex e-con e-child" 
                          data-e-type="container" 
                          data-element_type="container"
                          style={{
                            flex: '1 1 450px',
                            minHeight: '340px',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                        >
                          <img 
                            src={service.image} 
                            alt={service.imageAlt}
                            loading={index === 0 ? "eager" : "lazy"}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Bottom Call To Action */}
            <div 
              style={{ 
                backgroundColor: '#0A0A0A', 
                color: '#FFFFFF', 
                padding: '70px 20px', 
                textAlign: 'center' 
              }}
            >
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <span 
                  style={{
                    color: '#F4C600',
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    display: 'inline-block',
                    marginBottom: '12px'
                  }}
                >
                  START YOUR PROJECT
                </span>
                <h2 
                  style={{ 
                    fontSize: 'clamp(2rem, 1.8rem + 1.2vw, 2.8rem)', 
                    color: '#FFFFFF', 
                    fontWeight: 500,
                    marginBottom: '16px' 
                  }}
                >
                  Ready to Craft Your Signature Space?
                </h2>
                <p 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    fontSize: '16px', 
                    lineHeight: 1.7, 
                    marginBottom: '30px' 
                  }}
                >
                  Schedule a private design consultation with our principal architects and project leads today.
                </p>
                <Link 
                  href="/contact/"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#F4C600',
                    color: '#0A0A0A',
                    padding: '14px 34px',
                    borderRadius: '28px',
                    fontWeight: 700,
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Book Private Consultation
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

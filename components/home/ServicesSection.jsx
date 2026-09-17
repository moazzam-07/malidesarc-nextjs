import React from 'react';
import Link from 'next/link';

const flagshipServices = [
  {
    title: 'Turnkey Interior Projects',
    subtitle: 'End-to-End Execution',
    desc: 'Experience a seamless design journey where every aspect of your project is managed under one roof. From planning and design to civil work, electrical, furniture, lighting, décor, and final styling, we deliver complete turnkey interiors with precision and accountability.'
  },
  {
    title: 'Design Consultation & Suggestions',
    subtitle: 'Strategic Guidance',
    desc: "Whether you're planning a new home or improving an existing space, our expert consultation helps you make confident design decisions. We provide layout planning, material guidance, lighting concepts, color palettes, and furniture recommendations that align with your vision."
  },
  {
    title: 'Landscape Design',
    subtitle: 'Outdoor & Terraces',
    desc: 'Beautiful architecture deserves equally inspiring outdoor spaces. We design gardens, courtyards, terraces, water features, pathways, and outdoor living environments that complement your lifestyle while enhancing the overall architectural experience.'
  }
];

export default function ServicesSection() {
  return (
    <>
      <section 
        className="services-flagship-section"
        style={{
          padding: '90px 20px 40px 20px',
          backgroundColor: '#FFFFFF',
          color: '#111111'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span 
              style={{
                color: '#F4C600',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'inline-block',
                marginBottom: '14px'
              }}
            >
              OUR SERVICES
            </span>
            <h2 
              style={{
                fontFamily: '"Bai Jamjuree", sans-serif',
                fontSize: 'clamp(2rem, 1.8rem + 1.5vw, 3.2rem)',
                fontWeight: 500,
                color: '#111111',
                lineHeight: 1.25,
                marginBottom: '18px'
              }}
            >
              Complete Interior & Architectural Solutions
            </h2>
            <div 
              style={{
                width: '60px',
                height: '2px',
                backgroundColor: '#F4C600',
                margin: '0 auto'
              }} 
            />
          </div>

          {/* Flagship 3 Services Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '28px',
              marginBottom: '60px'
            }}
          >
            {flagshipServices.map((srv) => (
              <div key={srv.title} className="spacewora-service-card">
                <div>
                  <span 
                    style={{
                      display: 'inline-block',
                      fontSize: '12px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      color: '#F4C600',
                      backgroundColor: '#111111',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      marginBottom: '16px'
                    }}
                  >
                    {srv.subtitle}
                  </span>
                  <h3 
                    style={{
                      fontFamily: '"Bai Jamjuree", sans-serif',
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#111111',
                      marginBottom: '14px',
                      lineHeight: 1.3
                    }}
                  >
                    {srv.title}
                  </h3>
                  <p 
                    style={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: '#555555',
                      margin: 0
                    }}
                  >
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Showcase for Verticals */}
      <div className="elementor-element elementor-element-a55be19 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="a55be19" data-settings='{"background_background":"classic"}' style={{ paddingBottom: '70px' }}>
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-e447c1f animated-slow testimonial-links services-carousel elementor-testimonial--skin-default elementor-testimonial--layout-image_inline elementor-testimonial--align-center elementor-arrows-yes elementor-invisible elementor-widget elementor-widget-testimonial-carousel" data-e-type="widget" data-element_type="widget" data-id="e447c1f" data-settings='{"slides_per_view":"3","slides_to_scroll":"1","slides_per_view_laptop":"3","slides_per_view_tablet":"2","_animation":"fadeIn","_animation_delay":550,"space_between_laptop":{"unit":"px","size":6,"sizes":[]},"space_between_mobile":{"unit":"px","size":7,"sizes":[]},"show_arrows":"yes","speed":500,"autoplay":"yes","autoplay_speed":5000,"loop":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","space_between":{"unit":"px","size":10,"sizes":[]},"space_between_tablet":{"unit":"px","size":10,"sizes":[]}}' data-widget_type="testimonial-carousel.default">
            <div aria-label="Slides" aria-roledescription="carousel" className="elementor-main-swiper swiper" role="region">
              <div className="swiper-wrapper">
                <div aria-roledescription="slide" className="swiper-slide" role="group">
                  <div className="elementor-testimonial">
                    <div className="elementor-testimonial__content">
                      <div className="elementor-testimonial__text">
                        <div className="elementor elementor-6980" data-elementor-id="6980" data-elementor-post-type="elementor_library" data-elementor-type="section">
                          <div className="elementor-element elementor-element-b413cd0 e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="b413cd0" data-settings='{"background_background":"classic"}'></div>
                          <div className="elementor-element elementor-element-a26b559 e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="a26b559">
                            <div className="elementor-element elementor-element-227b973 animated-slow elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="227b973" data-settings='{"_animation":"none","_animation_delay":300}' data-widget_type="heading.default">
                              <h2 className="elementor-heading-title elementor-size-default">Residential</h2>
                            </div>
                            <div className="elementor-element elementor-element-1c9f5b1 animated-slow elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="1c9f5b1" data-settings='{"_animation":"none","_animation_delay":305}' data-widget_type="text-editor.default">
                              <p>Bespoke luxury residences, private villas, and curated apartments tailored to lifestyle, comfort, and timeless elegance.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-testimonial__footer"></div>
                  </div>
                </div>
                <div aria-roledescription="slide" className="swiper-slide" role="group">
                  <div className="elementor-testimonial">
                    <div className="elementor-testimonial__content">
                      <div className="elementor-testimonial__text">
                        <div className="elementor elementor-6976" data-elementor-id="6976" data-elementor-post-type="elementor_library" data-elementor-type="section">
                          <div className="elementor-element elementor-element-b413cd0 e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="b413cd0" data-settings='{"background_background":"classic"}'></div>
                          <div className="elementor-element elementor-element-a26b559 e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="a26b559">
                            <div className="elementor-element elementor-element-227b973 animated-slow elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="227b973" data-settings='{"_animation":"none","_animation_delay":300}' data-widget_type="heading.default">
                              <h2 className="elementor-heading-title elementor-size-default">Commercial</h2>
                            </div>
                            <div className="elementor-element elementor-element-1c9f5b1 animated-slow elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="1c9f5b1" data-settings='{"_animation":"none","_animation_delay":305}' data-widget_type="text-editor.default">
                              <p>Executive boardrooms, modern headquarters, and collaborative office interiors that balance prestige with operational precision.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-testimonial__footer"></div>
                  </div>
                </div>
                <div aria-roledescription="slide" className="swiper-slide" role="group">
                  <div className="elementor-testimonial">
                    <div className="elementor-testimonial__content">
                      <div className="elementor-testimonial__text">
                        <div className="elementor elementor-6932" data-elementor-id="6932" data-elementor-post-type="elementor_library" data-elementor-type="section">
                          <div className="elementor-element elementor-element-b413cd0 e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="b413cd0" data-settings='{"background_background":"classic"}'></div>
                          <div className="elementor-element elementor-element-a26b559 e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="a26b559">
                            <div className="elementor-element elementor-element-227b973 animated-slow elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="227b973" data-settings='{"_animation":"none","_animation_delay":300}' data-widget_type="heading.default">
                              <h2 className="elementor-heading-title elementor-size-default">Hospitality</h2>
                            </div>
                            <div className="elementor-element elementor-element-1c9f5b1 animated-slow elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="1c9f5b1" data-settings='{"_animation":"none","_animation_delay":305}' data-widget_type="text-editor.default">
                              <p>Boutique hotel lounges, luxury dining, and signature bars crafted to immerse guests in refined luxury and sensory ambiance.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-testimonial__footer"></div>
                  </div>
                </div>
                <div aria-roledescription="slide" className="swiper-slide" role="group">
                  <div className="elementor-testimonial">
                    <div className="elementor-testimonial__content">
                      <div className="elementor-testimonial__text">
                        <div className="elementor elementor-6984" data-elementor-id="6984" data-elementor-post-type="elementor_library" data-elementor-type="section">
                          <div className="elementor-element elementor-element-b413cd0 e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="b413cd0" data-settings='{"background_background":"classic"}'></div>
                          <div className="elementor-element elementor-element-a26b559 e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="a26b559">
                            <div className="elementor-element elementor-element-227b973 animated-slow elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="227b973" data-settings='{"_animation":"none","_animation_delay":300}' data-widget_type="heading.default">
                              <h2 className="elementor-heading-title elementor-size-default">Penthouse</h2>
                            </div>
                            <div className="elementor-element elementor-element-1c9f5b1 animated-slow elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="1c9f5b1" data-settings='{"_animation":"none","_animation_delay":305}' data-widget_type="text-editor.default">
                              <p>Sky residences featuring double-height architectural elevations, panoramic skyline terraces, and sculptural statement stairways.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-testimonial__footer"></div>
                  </div>
                </div>
                <div aria-roledescription="slide" className="swiper-slide" role="group">
                  <div className="elementor-testimonial">
                    <div className="elementor-testimonial__content">
                      <div className="elementor-testimonial__text">
                        <div className="elementor elementor-10604" data-elementor-id="10604" data-elementor-post-type="elementor_library" data-elementor-type="section">
                          <div className="elementor-element elementor-element-b413cd0 e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="b413cd0" data-settings='{"background_background":"classic"}'></div>
                          <div className="elementor-element elementor-element-a26b559 e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="a26b559">
                            <div className="elementor-element elementor-element-227b973 animated-slow elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="227b973" data-settings='{"_animation":"none","_animation_delay":300}' data-widget_type="heading.default">
                              <h2 className="elementor-heading-title elementor-size-default">Turnkey Project</h2>
                            </div>
                            <div className="elementor-element elementor-element-1c9f5b1 animated-slow elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="1c9f5b1" data-settings='{"_animation":"none","_animation_delay":305}' data-widget_type="text-editor.default">
                              <p>End-to-end realization from 3D blueprints to civil renovation, bespoke joinery, on-site supervision, and white-glove handover.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-testimonial__footer"></div>
                  </div>
                </div>
                <div aria-roledescription="slide" className="swiper-slide" role="group">
                  <div className="elementor-testimonial">
                    <div className="elementor-testimonial__content">
                      <div className="elementor-testimonial__text">
                        <div className="elementor elementor-exhibition" data-elementor-id="exhibition" data-elementor-post-type="elementor_library" data-elementor-type="section">
                          <div className="elementor-element elementor-element-b413cd0 e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="b413cd0" data-settings='{"background_background":"classic"}'></div>
                          <div className="elementor-element elementor-element-a26b559 e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="a26b559">
                            <div className="elementor-element elementor-element-227b973 animated-slow elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="227b973" data-settings='{"_animation":"none","_animation_delay":300}' data-widget_type="heading.default">
                              <h2 className="elementor-heading-title elementor-size-default">Exhibition</h2>
                            </div>
                            <div className="elementor-element elementor-element-1c9f5b1 animated-slow elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="1c9f5b1" data-settings='{"_animation":"none","_animation_delay":305}' data-widget_type="text-editor.default">
                              <p>Experiential brand pavilions, interactive booths, and high-impact expo architectures engineered for maximum engagement.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-testimonial__footer"></div>
                  </div>
                </div>
              </div>
              <div aria-label="Previous" className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex="0">
                <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
                </svg>
              </div>
              <div aria-label="Next" className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex="0">
                <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-4d6cd0d elementor-widget elementor-widget-html" data-e-type="widget" data-element_type="widget" data-id="4d6cd0d" data-widget_type="html.default"></div>
        </div>
      </div>
    </>
  );
}

import React from 'react';

const LOGOS = [
  { name: 'godrej', src: '/wp-content/uploads/2026/08/godrej-768x358.webp' },
  { name: 'icici', src: '/wp-content/uploads/2026/08/icici-768x358.webp' },
  { name: 'jettec', src: '/wp-content/uploads/2026/08/jettec-768x358.webp' },
  { name: 'kanakia', src: '/wp-content/uploads/2026/08/kanakia-768x358.webp' },
  { name: 'kohinoor', src: '/wp-content/uploads/2026/08/kohinoor-768x358.webp' },
  { name: 'lodha', src: '/wp-content/uploads/2026/08/lodha-768x358.webp' },
  { name: 'lulu-mall', src: '/wp-content/uploads/2026/08/lulu-mall-768x358.webp' },
  { name: 'meraki', src: '/wp-content/uploads/2026/08/meraki-768x358.webp' },
  { name: 'miscot-1', src: '/wp-content/uploads/2026/08/miscot-1-768x358.webp' },
  { name: 'mrf', src: '/wp-content/uploads/2026/08/mrf-768x358.webp' },
  { name: 'newarch', src: '/wp-content/uploads/2026/08/newarch-768x358.webp' },
  { name: 'romell', src: '/wp-content/uploads/2026/08/romell-768x358.webp' },
  { name: 'ruparel', src: '/wp-content/uploads/2026/08/ruparel-768x358.webp' },
  { name: 'sbi', src: '/wp-content/uploads/2026/08/sbi-768x358.webp' },
  { name: 'sd-group', src: '/wp-content/uploads/2026/08/sd-group-768x358.webp' },
  { name: 'shapoorji', src: '/wp-content/uploads/2026/08/shapoorji-768x358.webp' },
  { name: 'technova', src: '/wp-content/uploads/2026/08/technova-768x358.webp' },
  { name: 'welset-1', src: '/wp-content/uploads/2026/08/welset-1-768x358.webp' },
  { name: 'ahuja', src: '/wp-content/uploads/2026/08/ahuja-768x358.webp' },
  { name: 'barnet', src: '/wp-content/uploads/2026/08/barnet-768x358.webp' },
];

export default function ClientLogosSection() {
  return (
    <>
      <div
        className="elementor-element elementor-element-92a3817 e-flex e-con-boxed e-con e-parent"
        data-e-type="container"
        data-element_type="container"
        data-id="92a3817"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-dc4970c e-con-full e-flex e-con e-child"
            data-e-type="container"
            data-element_type="container"
            data-id="dc4970c"
          >
            <div
              className="elementor-element elementor-element-03f9091 animated-slow elementor-invisible elementor-widget elementor-widget-heading"
              data-e-type="widget"
              data-element_type="widget"
              data-id="03f9091"
              data-settings='{"_animation":"fadeInUp","_animation_delay":300}'
              data-widget_type="heading.default"
            >
              <h2 className="elementor-heading-title elementor-size-default">
                Trusted by Businesses &amp; Brands
              </h2>
            </div>
            <div
              className="elementor-element elementor-element-c02d774 elementor-widget__width-initial animated-slow elementor-invisible elementor-widget elementor-widget-text-editor"
              data-e-type="widget"
              data-element_type="widget"
              data-id="c02d774"
              data-settings='{"_animation":"fadeInUp","_animation_delay":305}'
              data-widget_type="text-editor.default"
            >
              <div className="cl-hd">
                <p className="sub rv d2 in">
                  From commercial workplaces and hospitality environments to residential interiors, our clients trust SPACEWORA for thoughtful design, reliable execution, and end-to-end interior contracting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="elementor-element elementor-element-e9ee212 e-con-full e-flex e-con e-parent"
        data-e-type="container"
        data-element_type="container"
        data-id="e9ee212"
        data-settings='{"background_background":"classic"}'
      >
        <div
          className="elementor-element elementor-element-da47656 client-logo-carousel elementor-widget elementor-widget-image-carousel"
          data-e-type="widget"
          data-element_type="widget"
          data-id="da47656"
          data-settings='{"slides_to_show":"6","slides_to_scroll":"1","navigation":"none","lazyload":"yes","autoplay_speed":0,"speed":7000,"image_spacing_custom":{"unit":"px","size":34,"sizes":[]},"slides_to_show_mobile":"3","slides_to_show_tablet":"4","autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","infinite":"yes"}'
          data-widget_type="image-carousel.default"
        >
          <div
            aria-label="Image Carousel"
            aria-roledescription="carousel"
            className="elementor-image-carousel-wrapper swiper"
            dir="ltr"
            role="region"
          >
            <div aria-live="off" className="elementor-image-carousel swiper-wrapper">
              {LOGOS.map((logo, idx) => (
                <div
                  key={logo.name}
                  aria-label={`${idx + 1} of ${LOGOS.length}`}
                  aria-roledescription="slide"
                  className="swiper-slide"
                  role="group"
                >
                  <figure className="swiper-slide-inner">
                    <img
                      alt={logo.name}
                      className="swiper-slide-image swiper-lazy"
                      data-src={logo.src.replace(/^\//, '')}
                      src={logo.src}
                    />
                    <div className="swiper-lazy-preloader"></div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="elementor-element elementor-element-52acf7c e-flex e-con-boxed e-con e-parent"
        data-e-type="container"
        data-element_type="container"
        data-id="52acf7c"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-c4cdd95 elementor-widget elementor-widget-spacer"
            data-e-type="widget"
            data-element_type="widget"
            data-id="c4cdd95"
            data-widget_type="spacer.default"
          >
            <div className="elementor-spacer">
              <div className="elementor-spacer-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

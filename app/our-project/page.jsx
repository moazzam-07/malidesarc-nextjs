import React, { Suspense } from 'react';
import ProjectsFilterGrid from '@/components/projects/ProjectsFilterGrid';

export const metadata = {
  title: 'Our Commercial & Residential Projects | MaliDesarc',
  description: 'Explore our comprehensive portfolio of award-winning commercial, residential, hospitality, retail, and corporate interior design projects across Mumbai.',
};

export default function OurProjectPage() {
  return (
    <div className="elementor elementor-10205" data-elementor-id="10205" data-elementor-type="wp-page">
      {/* Hero Banner */}
<div className="elementor-element elementor-element-7b2753e project-dynamic-hero project-hero e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="7b2753e" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="e-con-inner">
    <div className="elementor-element elementor-element-9ffdfc4 project-hero-title elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="9ffdfc4" data-widget_type="heading.default">
      <h1 className="elementor-heading-title elementor-size-default">
        Our
        <span className="custom-amp">
           Projects
        </span>
      </h1>
    </div>
    <div className="elementor-element elementor-element-342ab16 elementor-widget__width-initial elementor-widget-mobile__width-initial project-dynamic-description project-hero-description elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="342ab16" data-widget_type="text-editor.default">
      <p>
        Explore our diverse portfolio of interior projects, where thoughtful design, refined detailing, and functional spaces come together to create meaningful environments.
      </p>
    </div>
    <div className="elementor-element elementor-element-3e20dd9 elementor-widget elementor-widget-html" data-e-type="widget" data-element_type="widget" data-id="3e20dd9" data-widget_type="html.default"></div>
  </div>
</div>

      {/* Interactive Filter and Project Grid */}
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px', color: '#fff' }}>Loading projects...</div>}>
        <ProjectsFilterGrid />
      </Suspense>
    </div>
  );
}

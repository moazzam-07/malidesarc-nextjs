'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';

const CATEGORIES = [
  { id: '__all', label: 'All' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'residential', label: 'Residential' },
  { id: 'retail', label: 'Retails' },
  { id: 'sales-office', label: 'Sales Office' },
  { id: 'show-flats', label: 'Show Flats' },
];

export default function ProjectsFilterGrid() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('__all');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && CATEGORIES.some(c => c.id === cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const projects = [

    {
      id: '0',
      title: 'Vora Skyline Project',
      category: 'commercial',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Vora Skyline Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Vora Skyline Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/vora-skyline/" rel="tag">
        Commercial
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Vora Skyline Project
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									1170 sq. ft.								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/vora-skyline/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '1',
      title: 'Stratum Project',
      category: 'commercial',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Stratum Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Stratum Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/vora-skyline/" rel="tag">
        Commercial
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Stratum Project
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									430 sq. ft.								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/stratum/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '2',
      title: 'Hosteller Project',
      category: 'commercial',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Hosteller Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Hosteller Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/vora-skyline/" rel="tag">
        Commercial
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Hosteller Project
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									9000 sq. ft.								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/hosteller/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '3',
      title: 'Eurogrip Tyres Project',
      category: 'retail',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Eurogrip Tyres Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Eurogrip Tyres Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/project-category/retail/" rel="tag">
        Retails
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Eurogrip Tyres Project
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									1 BHK								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/eurogriptyres/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '4',
      title: 'Baluwala Show Flat',
      category: 'show-flats',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Baluwala Show Flat
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Baluwala Show Flat
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/project-category/show-flats/" rel="tag">
        Show Flats
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Baluwala Show Flat
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									1 BHK								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/baluwala-sample-flat/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '5',
      title: 'Taj Boutique Bandra Project',
      category: 'hospitality',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Taj Boutique Bandra Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Taj Boutique Bandra Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/project-category/hospitality/" rel="tag">
        Hospitality
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Taj Boutique Bandra Project
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									3 Floors								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/taj-boutique-bandra/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '6',
      title: 'DGS Gurudarshan Project',
      category: 'sales-office',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      DGS Gurudarshan Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      DGS Gurudarshan Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/project-category/sales-office/" rel="tag">
        Sales Office
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            DGS Gurudarshan Project
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									1,500 sq. ft.								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/dgs-gurudarshan/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '7',
      title: 'Codeword Boss',
      category: 'sales-office',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Codeword Boss
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Codeword Boss
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/project-category/sales-office/" rel="tag">
        Sales Office
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Codeword Boss
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									1,500 sq. ft.								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/boss/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '8',
      title: 'Baluwala Developer',
      category: 'sales-office',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Baluwala Developer
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Baluwala Developer
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/project-category/sales-office/" rel="tag">
        Sales Office
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Baluwala Developer
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									375 sq.ft.								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/baluwala-developers-sales-office/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '9',
      title: 'Auris 2103 Project',
      category: 'residential',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Auris 2103 Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Auris 2103 Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/project-category/residential/" rel="tag">
        Residential
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Auris 2103 Project
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									3 BHK								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/auris-2103/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '10',
      title: 'Bellissima Project',
      category: 'sales-office',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Bellissima Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Bellissima Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/project-category/sales-office/" rel="tag">
        Sales Office
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Bellissima Project
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									800 sq. ft								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/bellisma/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '11',
      title: 'Vensco Project',
      category: 'show-flats',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Vensco Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Vensco Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/project-category/show-flats/" rel="tag">
        Show Flats
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Vensco Project
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									6000 sq. ft								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/vensco/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '12',
      title: 'Rudra Project',
      category: 'sales-office',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Rudra Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Rudra Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/project-category/sales-office/" rel="tag">
        Sales Office
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Rudra Project
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									2000 sq. ft.								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/project-rudra/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '13',
      title: 'Hotel Karl',
      category: 'hospitality',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Hotel Karl
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Hotel Karl
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/project-category/hospitality/" rel="tag">
        Hospitality
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Hotel Karl
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									6000 sq. ft								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/hotel-karl-residency/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '14',
      title: 'DTDC',
      category: 'commercial',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      DTDC
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      DTDC
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/vora-skyline/" rel="tag">
        Commercial
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            DTDC
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									5050 sq. ft.								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/dtdc/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '15',
      title: 'Emerald Isle Project',
      category: 'residential',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Emerald Isle Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Emerald Isle Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/project-category/residential/" rel="tag">
        Residential
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Emerald Isle Project
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									2 BHK								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/emerald-isle/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      id: '16',
      title: 'Blue Grass Residency Project',
      category: 'residential',
      content: (
<div className="elementor-element elementor-element-1ab7473 e-con-full hover-card project-card e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1ab7473" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div className="elementor-element elementor-element-8d75cea elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8d75cea" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Blue Grass Residency Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-a734f9c elementor-widget-tablet__width-initial elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="a734f9c" data-widget_type="heading.default">
    <h2 className="elementor-heading-title elementor-size-default">
      Blue Grass Residency Project
    </h2>
  </div>
  <div className="elementor-element elementor-element-ceb9115 project-category-heading elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="ceb9115" data-widget_type="heading.default">
    <h3 className="elementor-heading-title elementor-size-default">
      <a href="/project-category/residential/" rel="tag">
        Residential
      </a>
    </h3>
  </div>
  <div className="elementor-element elementor-element-f9cf0c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f9cf0c6">
    <div className="elementor-element elementor-element-f8cc945 e-con-full hover-content e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f8cc945">
      <div className="elementor-element elementor-element-734e98e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="734e98e">
        <div className="elementor-element elementor-element-51e6d2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="51e6d2c" data-widget_type="heading.default">
          <p className="elementor-heading-title elementor-size-default">
            Blue Grass Residency Project
          </p>
        </div>
        <div className="elementor-element elementor-element-4dc656c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4dc656c" data-widget_type="text-editor.default">
          
									2100 sq. ft								
        </div>
      </div>
      <div className="elementor-element elementor-element-716186d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="716186d">
        <div className="elementor-element elementor-element-c560306 elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="c560306" data-widget_type="button.default">
          <a className="elementor-button elementor-button-link elementor-size-sm" href="/blue-grass-residency/" target="_blank">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                Know More
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      )
    },
  ];

  const filteredProjects = selectedCategory === '__all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleFilterClick = (catId) => {
    startTransition(() => {
      setSelectedCategory(catId);
    });
  };

  return (
    <>
      {/* Filter Bar */}
      <div className="elementor-element elementor-element-e71893d e-filter e-loop-filter elementor-widget elementor-widget-loop-filter" data-e-type="widget" data-element_type="widget" data-id="e71893d" data-widget_type="loop-filter.default" style={{ margin: '30px auto', display: 'flex', justifyContent: 'center' }}>
        <div className="elementor-widget-container" style={{ width: '100%' }}>
          <div className="e-filter-bar" role="toolbar" aria-label="Filter taxonomy" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {CATEGORIES.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`e-filter-item ${isActive ? 'e-filter-item-active' : ''}`}
                  data-filter={cat.id}
                  role="button"
                  aria-pressed={isActive}
                  onClick={() => handleFilterClick(cat.id)}
                  style={{
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span className="e-filter-item__text">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div 
        className="elementor-element elementor-element-9ef0398 e-flex e-con-boxed project-card-layout e-con e-parent" 
        data-e-type="container" 
        data-element_type="container" 
        data-id="9ef0398"
        style={{
          transition: 'opacity 0.3s ease',
          opacity: isPending ? 0.6 : 1,
        }}
      >
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-87723fe e-loop-grid-post-per-page-12 e-loop-grid-post-per-page-tablet-12 e-loop-grid-post-per-page-mobile-12 e-grid-desktop-3 e-grid-tablet-2 e-grid-mobile-1 elementor-widget elementor-widget-loop-grid" data-e-type="widget" data-element_type="widget" data-id="87723fe" data-widget_type="loop-grid.post">
            <div className="elementor-widget-container">
              <div className="elementor-loop-container elementor-grid" style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
                {filteredProjects.map(project => (
                  <div key={project.id} className="e-loop-item" style={{ width: '100%' }}>
                    {project.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import os
import sys
import re
from bs4 import BeautifulSoup

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from scripts.convert_to_jsx import node_to_jsx
from scripts.build_projects_page import extract_project_data

def generate_projects_filter_grid():
    os.makedirs('components/projects', exist_ok=True)
    card_data = extract_project_data()

    # Generate each card JSX inside an array or map
    cards_code = []
    for idx, (title, category, jsx) in enumerate(card_data):
        cards_code.append(f"""
    {{
      id: '{idx}',
      title: '{title}',
      category: '{category}',
      content: (
{jsx}
      )
    }},""")

    component_code = """'use client';

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
""" + ''.join(cards_code) + """
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
"""
    with open('components/projects/ProjectsFilterGrid.jsx', 'w', encoding='utf-8') as f:
        f.write(component_code)
    print('Generated components/projects/ProjectsFilterGrid.jsx')

def generate_our_project_page():
    os.makedirs('app/our-project', exist_ok=True)
    with open('c:/Users/MOAZZAM/coding/incinc_projects/new_interior/our-project/index.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    main = soup.find('main')
    # The hero section (title + subtitle)
    sec0 = main.find('div', class_='elementor-element-7b2753e')
    # Omit old filter from sec0 since ProjectsFilterGrid handles it
    old_filter = sec0.find(class_='e-filter')
    if old_filter:
        old_filter.decompose()
    hero_jsx = node_to_jsx(sec0)

    page_code = """import React, { Suspense } from 'react';
import ProjectsFilterGrid from '@/components/projects/ProjectsFilterGrid';

export const metadata = {
  title: 'Our Commercial & Residential Projects | MaliDesarc',
  description: 'Explore our comprehensive portfolio of award-winning commercial, residential, hospitality, retail, and corporate interior design projects across Mumbai.',
};

export default function OurProjectPage() {
  return (
    <div className="elementor elementor-10205" data-elementor-id="10205" data-elementor-type="wp-page">
      {/* Hero Banner */}
""" + hero_jsx + """
      {/* Interactive Filter and Project Grid */}
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px', color: '#fff' }}>Loading projects...</div>}>
        <ProjectsFilterGrid />
      </Suspense>
    </div>
  );
}
"""
    with open('app/our-project/page.jsx', 'w', encoding='utf-8') as f:
        f.write(page_code)
    print('Generated app/our-project/page.jsx')

if __name__ == '__main__':
    generate_projects_filter_grid()
    generate_our_project_page()


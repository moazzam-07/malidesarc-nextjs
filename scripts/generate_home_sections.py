import os
import sys
import re
from bs4 import BeautifulSoup

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from scripts.convert_to_jsx import node_to_jsx

def build_home_sections():
    with open('c:/Users/MOAZZAM/coding/incinc_projects/new_interior/index.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    main = soup.find('main')
    top_containers = main.find('div', class_='elementor-13403').find_all('div', class_='e-con', recursive=False)
    print(f'Found {len(top_containers)} top containers in elementor-13403')

    os.makedirs('components/home', exist_ok=True)

    # 1. HeroSection (top_containers[0])
    hero_jsx = node_to_jsx(top_containers[0])
    # Add relative positioning to hero container and embed HeroSlideshow inside it
    hero_jsx_clean = re.sub(
        r'(<div className="elementor-element elementor-element-3d03374[^"]*"[^>]*>)',
        r'\1\n  <HeroSlideshow />',
        hero_jsx,
        count=1
    )
    with open('components/home/HeroSection.jsx', 'w', encoding='utf-8') as f:
        f.write("""import React from 'react';
import Link from 'next/link';
import HeroSlideshow from './HeroSlideshow';

export default function HeroSection() {
  return (
""" + hero_jsx_clean + """
  );
}
""")
    print('Generated components/home/HeroSection.jsx')

    # 2. AboutSection (top_containers[1])
    about_jsx = node_to_jsx(top_containers[1])
    with open('components/home/AboutSection.jsx', 'w', encoding='utf-8') as f:
        f.write("""import React from 'react';
import Link from 'next/link';

export default function AboutSection() {
  return (
""" + about_jsx + """
  );
}
""")
    print('Generated components/home/AboutSection.jsx')

    # 3. MarqueeTicker (top_containers[2])
    marquee_jsx = node_to_jsx(top_containers[2])
    with open('components/home/MarqueeTicker.jsx', 'w', encoding='utf-8') as f:
        f.write("""import React from 'react';

export default function MarqueeTicker() {
  return (
""" + marquee_jsx + """
  );
}
""")
    print('Generated components/home/MarqueeTicker.jsx')

    # 4. StatsSection (top_containers[3])
    stats_jsx = node_to_jsx(top_containers[3])
    with open('components/home/StatsSection.jsx', 'w', encoding='utf-8') as f:
        f.write("""import React from 'react';

export default function StatsSection() {
  return (
""" + stats_jsx + """
  );
}
""")
    print('Generated components/home/StatsSection.jsx')

    # 5. ServicesSection (top_containers[4] and top_containers[5])
    services_jsx = node_to_jsx(top_containers[4]) + '\n' + node_to_jsx(top_containers[5])
    with open('components/home/ServicesSection.jsx', 'w', encoding='utf-8') as f:
        f.write("""import React from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <>
""" + services_jsx + """
    </>
  );
}
""")
    print('Generated components/home/ServicesSection.jsx')

    # 6. ProcessSection (top_containers[6] and top_containers[7])
    process_jsx = node_to_jsx(top_containers[6]) + '\n' + node_to_jsx(top_containers[7])
    with open('components/home/ProcessSection.jsx', 'w', encoding='utf-8') as f:
        f.write("""import React from 'react';

export default function ProcessSection() {
  return (
    <>
""" + process_jsx + """
    </>
  );
}
""")
    print('Generated components/home/ProcessSection.jsx')

    # 7. ClientVerticalsSection (top_containers[8])
    verticals_jsx = node_to_jsx(top_containers[8])
    with open('components/home/ClientVerticalsSection.jsx', 'w', encoding='utf-8') as f:
        f.write("""import React from 'react';

export default function ClientVerticalsSection() {
  return (
""" + verticals_jsx + """
  );
}
""")
    print('Generated components/home/ClientVerticalsSection.jsx')

    # 8. FeaturedProjectsSection (top_containers[9], 10, 11, 12)
    projects_jsx = '\n'.join(node_to_jsx(top_containers[i]) for i in range(9, 13))
    with open('components/home/FeaturedProjectsSection.jsx', 'w', encoding='utf-8') as f:
        f.write("""import React from 'react';
import Link from 'next/link';

export default function FeaturedProjectsSection() {
  return (
    <>
""" + projects_jsx + """
    </>
  );
}
""")
    print('Generated components/home/FeaturedProjectsSection.jsx')

    # 9. ClientLogosSection (top_containers[13], 14, 15)
    logos_jsx = '\n'.join(node_to_jsx(top_containers[i]) for i in range(13, 16))
    with open('components/home/ClientLogosSection.jsx', 'w', encoding='utf-8') as f:
        f.write("""import React from 'react';

export default function ClientLogosSection() {
  return (
    <>
""" + logos_jsx + """
    </>
  );
}
""")
    print('Generated components/home/ClientLogosSection.jsx')

    # 10. TestimonialsSection (top_containers[16], 17)
    testi_jsx = '\n'.join(node_to_jsx(top_containers[i]) for i in range(16, 18))
    with open('components/home/TestimonialsSection.jsx', 'w', encoding='utf-8') as f:
        f.write("""import React from 'react';

export default function TestimonialsSection() {
  return (
    <>
""" + testi_jsx + """
    </>
  );
}
""")
    print('Generated components/home/TestimonialsSection.jsx')

    # 11. CtaSection (top_containers[18])
    cta_jsx = node_to_jsx(top_containers[18])
    with open('components/home/CtaSection.jsx', 'w', encoding='utf-8') as f:
        f.write("""import React from 'react';
import Link from 'next/link';

export default function CtaSection() {
  return (
""" + cta_jsx + """
  );
}
""")
    print('Generated components/home/CtaSection.jsx')

if __name__ == '__main__':
    build_home_sections()


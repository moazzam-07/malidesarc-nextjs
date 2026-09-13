import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import WhySpaceworaSection from '@/components/home/WhySpaceworaSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import ClientVerticalsSection from '@/components/home/ClientVerticalsSection';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import ClientLogosSection from '@/components/home/ClientLogosSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';

export const metadata = {
  title: 'Luxury Interior Architecture & Design Studio | SPACEWORA Design Studio',
  description:
    'SPACEWORA Design Studio crafts timeless luxury interiors, turnkey architecture, and bespoke spaces that reflect your personality and elevate the way you live.',
};

export default function HomePage() {
  return (
    <div className="elementor elementor-13403" data-elementor-id="13403" data-elementor-type="wp-page">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <WhySpaceworaSection />
      <ServicesSection />
      <ProcessSection />
      <ClientVerticalsSection />
      <FeaturedProjectsSection />
      <ClientLogosSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}

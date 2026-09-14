import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileMenuPopup from '@/components/MobileMenuPopup';
import WhatsAppButton from '@/components/WhatsAppButton';
import SmoothScroll from '@/components/SmoothScroll';
import ClientAnimationManager from '@/components/ClientAnimationManager';
import { MobileMenuProvider } from '@/components/MobileMenuContext';

export const metadata = {
  title: 'SPACEWORA Design Studio | Luxury Interior Architecture & Design',
  description: 'SPACEWORA Design Studio creates luxury interiors and architectural experiences that reflect your personality, celebrate your lifestyle, and elevate the way you live.',
  metadataBase: new URL('https://spacewora.vercel.app'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'SPACEWORA Design Studio | Luxury Interior Architecture & Design',
    description: 'Designing Timeless Spaces That Feel As Extraordinary As They Look. Bespoke interiors, commercial architecture, and turnkey execution.',
    url: 'https://spacewora.vercel.app',
    siteName: 'SPACEWORA Design Studio',
    images: [
      {
        url: '/og-hero-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'SPACEWORA Design Studio Hero Section Thumbnail',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPACEWORA Design Studio | Luxury Interior Architecture & Design',
    description: 'Designing Timeless Spaces That Feel As Extraordinary As They Look.',
    images: ['/og-hero-thumbnail.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        {/* Favicon & Touch Icons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Core Elementor & Theme Stylesheets */}
        <link rel="stylesheet" href="/wp-content/themes/hello-elementor/assets/css/reset.css" />
        <link rel="stylesheet" href="/wp-content/themes/hello-elementor/assets/css/theme.css" />
        <link rel="stylesheet" href="/wp-content/themes/hello-elementor/assets/css/header-footer.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/custom-frontend.min.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-6.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-7903.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-image.min.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/custom-pro-widget-nav-menu.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/animations/styles/e-animation-grow.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor-pro/assets/css/modules/sticky.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-heading.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-divider.min.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-google_maps.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/animations/styles/e-animation-pop.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/custom-apple-webkit.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/custom-widget-contact-buttons-base.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor-pro/assets/css/widget-animated-headline.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/animations/styles/fadeIn.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-counter.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/custom-pro-widget-testimonial-carousel.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor-pro/assets/css/widget-carousel-module-base.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInLeft.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-image-carousel.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-spacer.min.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-13403.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-10205.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor-pro/assets/css/widget-loop-filter.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor-pro/assets/css/widget-loop-common.min.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/custom-pro-widget-loop-grid.min.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-6886.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-9770.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-11543.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-6976.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-6932.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-6984.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-10604.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-6980.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInDown.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor-pro/assets/css/conditionals/popup.min.css" />

        {/* Localized Google Fonts */}
        <link rel="stylesheet" href="/assets/fonts/Bai_Jamjuree_543670.css" />
        <link rel="stylesheet" href="/assets/fonts/Quicksand_228490.css" />
        <link rel="stylesheet" href="/assets/fonts/Playfair_Display_707955.css" />
        <link rel="stylesheet" href="/assets/fonts/Poppins_172737.css" />
        <link rel="stylesheet" href="/assets/fonts/Kumbh_Sans_311097.css" />
      </head>
      <body className="home wp-singular page-template-default page page-id-13403 wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-kit-6 elementor-page elementor-page-13403">
        <MobileMenuProvider>
          <SmoothScroll />
          <ClientAnimationManager />
          <Header />
          <main id="content" className="site-main">
            {children}
          </main>
          <Footer />
          <MobileMenuPopup />
          <WhatsAppButton />
        </MobileMenuProvider>
      </body>
    </html>
  );
}

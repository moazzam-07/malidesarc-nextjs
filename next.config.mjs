/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/teams',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/timeline',
        destination: '/about/',
        permanent: true,
      },
      // Redirect legacy competitor project routes to portfolio
      {
        source: '/stratum',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/bellisma',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/boss',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/dtdc',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/hosteller',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/eurogriptyres',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/hotel-karl-residency',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/baluwala-developers-sales-office',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/baluwala-sample-flat',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/auris-2103',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/dgs-gurudarshan',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/emerald-isle',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/project-rudra',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/taj-boutique-bandra',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/vensco',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/vora-skyline',
        destination: '/our-project/',
        permanent: true,
      },
      {
        source: '/blue-grass-residency',
        destination: '/our-project/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/trauma-treatment',
        destination: '/services/trauma-treatment',
        permanent: true,
      },
      {
        source: '/holistic-therapies',
        destination: '/services/holistic-therapies',
        permanent: true,
      },
      {
        source: '/energy-healing',
        destination: '/services/energy-healing',
        permanent: true,
      },
      {
        source: '/natural-glow',
        destination: '/services/natural-glow',
        permanent: true,
      },
      {
        source: '/healing-movement',
        destination: '/services/healing-movement',
        permanent: true,
      },
      {
        source: '/maternal-massage',
        destination: '/services/maternal-massage',
        permanent: true,
      },
      {
        source: '/2by4',
        destination: '/services/2by4',
        permanent: true,
      },
      {
        source: '/dr-hr-sports-london',
        destination: '/services/dr-hr-sports-london',
        permanent: true,
      },
      {
        source: '/bodies-by-rs',
        destination: '/services/bodies-by-rs',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

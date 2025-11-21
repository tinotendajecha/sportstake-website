const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Other custom Next.js options here
});

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.EXPORT_STATIC === 'true' ? 'export' : undefined,
  images: {
    unoptimized: process.env.EXPORT_STATIC === 'true',
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
  compress: true,
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;

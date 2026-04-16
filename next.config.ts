import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  productionBrowserSourceMaps: false,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

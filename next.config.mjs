/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper environment variables are set
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/ClosR' : '',
    NEXT_PUBLIC_ENVIRONMENT: process.env.NODE_ENV || 'development'
  },
  // GitHub Pages deployment settings
  basePath: process.env.NODE_ENV === 'production' ? '/ClosR' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ClosR' : '',
  output: 'export',
  // Enable static exports and ensure proper routing
  trailingSlash: true,
  distDir: 'out',
  // Optimize image handling for static export
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'localhost', 'githubusercontent.com', 'cloudinary.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp'],
    minimumCacheTTL: 60
  },
  // Optimize performance with minimal experimental features
  experimental: {
    optimizeCss: true
  },
  // Configure build-time checks
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production'
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production'
  },
  // Optimize build performance
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // swcMinify is enabled by default in Next.js 15.2.2
};

export default nextConfig;

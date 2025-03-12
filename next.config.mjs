/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages deployment settings with custom domain
  basePath: '',
  assetPrefix: ''
  output: 'export',
  // Set to true to enable static exports
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Removed deprecated domains configuration
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  // Rewrites and headers are not compatible with static export
  // Commenting out for GitHub Pages deployment
  /*
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://:host/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  */
}

// Import modules at the top level
import * as fs from 'fs';
import * as path from 'path';

// HTTPS configuration for development
// Note: Next.js doesn't support direct HTTPS configuration in next.config.mjs
// For local HTTPS, use a proxy server like 'local-ssl-proxy' or 'mkcert' with 'next dev'
if (process.env.NODE_ENV === 'development') {
  const certPath = path.join(process.cwd(), 'certs');
  
  try {
    // Check if certificates exist
    if (
      fs.existsSync(path.join(certPath, 'server.key')) &&
      fs.existsSync(path.join(certPath, 'server.crt'))
    ) {
      console.log('HTTPS certificates found. Use a proxy server for HTTPS in development.');
      // The 'server' key is not supported in Next.js config
      // Use a proxy like 'local-ssl-proxy' instead
    }
  } catch (error) {
    console.warn('HTTPS certificates not found, using HTTP instead');
  }
}

export default nextConfig

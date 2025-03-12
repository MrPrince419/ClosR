/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper environment variables are set
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/ClosR' : '',
    NEXT_PUBLIC_ENVIRONMENT: process.env.NODE_ENV || 'development',
  },
  // GitHub Pages deployment settings
  basePath: process.env.NODE_ENV === 'production' ? '/ClosR' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ClosR' : '',
  output: 'export',
  // Enable static exports and ensure proper routing
  trailingSlash: true,
  distDir: 'out',
  // Ensure images are handled correctly in static export
  images: {
    unoptimized: true,
    ...nextConfig.images
  },
  // Add experimental features for better static export support
  experimental: {
    images: {
      allowFutureImage: true
    },
    workerThreads: true,
    optimizeCss: true
  },
  // Disable ESLint and TypeScript checks during builds for faster deployment
  // Note: Enable these in development for better code quality
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  images: {
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
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      }
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

import * as fs from 'fs';
import * as path from 'path';

// HTTPS configuration for development
// Note: Next.js doesn't support direct HTTPS configuration in next.config.mjs
// For local HTTPS, use a proxy server like 'local-ssl-proxy' or 'mkcert' with 'next dev'
const isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  const certPath = path.join(process.cwd(), 'certs');
  
  try {
    if (!fs.existsSync(certPath)) {
      fs.mkdirSync(certPath, { recursive: true });
    }
    
    const keyPath = path.join(certPath, 'server.key');
    const certFilePath = path.join(certPath, 'server.crt');
    
    if (fs.existsSync(keyPath) && fs.existsSync(certFilePath)) {
      console.log('✅ HTTPS certificates found.');
      console.log('To run with HTTPS in development, use:');
      console.log('npx local-ssl-proxy --source 3001 --target 3000 --cert ./certs/server.crt --key ./certs/server.key');
    } else {
      console.warn('⚠️ HTTPS certificates not found in:', certPath);
      console.log('To generate certificates, run:');
      console.log('npm run generate-certificates');
      console.log('or use mkcert for development:');
      console.log('mkcert localhost');
    }
  } catch (error) {
    console.error('❌ Error checking HTTPS certificates:', error.message);
    console.error('Please ensure you have write permissions to the certs directory');
  }
}

export default nextConfig

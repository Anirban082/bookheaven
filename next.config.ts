// next.config.ts
import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports for Azure Static Web Apps
  distDir: 'out',    // Output directory for the static build
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all domains for images
      },
    ],
  },
  // Handle API routes appropriately
  rewrites: async () => {
    return {
      fallback: [
        // Rewrite API calls to Azure Functions if you're using them
        {
          source: '/api/:path*',
          destination: '/api/:path*',
        },
      ],
    };
  },
  // Additional experimental features supported by Next.js 15
  experimental: {
    // Enable if you're using server actions with Static Export
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.azurestaticapps.net'],
    },
  },
};

export default nextConfig;
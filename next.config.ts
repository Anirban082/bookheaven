// // next.config.ts
// import { type NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   output: 'export',  // Enable static exports for Azure Static Web Apps
//   distDir: 'out',    // Output directory for the static build
//   images: {
//     unoptimized: true, // Required for static export
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**', // Allow all domains for images
//       },
//     ],
//   },
//   // Handle API routes appropriately
//   rewrites: async () => {
//     return {
//       fallback: [
//         // Rewrite API calls to Azure Functions if you're using them
//         {
//           source: '/api/:path*',
//           destination: '/api/:path*',
//         },
//       ],
//     };
//   },
//   // Additional experimental features supported by Next.js 15
//   experimental: {
//     // Enable if you're using server actions with Static Export
//     serverActions: {
//       allowedOrigins: ['localhost:3000', '*.azurestaticapps.net'],
//     },
//   },
// };

// export default nextConfig;


// next.config.ts
import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    // Public environment variables that can be included in client-side code
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://mango-rock-0b0647b00.4.azurestaticapps.net',
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || '',
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  
  // Important: If you have server-side data fetching or actions, 
  // you'll need to make adjustments for static export
  experimental: {
    // Enable if you're using these features
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.azurestaticapps.net'],
    },
    // This is a newer Next.js feature - if it's giving you trouble, remove it
    typedRoutes: true,
  },
};

export default nextConfig;

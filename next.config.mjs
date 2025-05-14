/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
    domains: ['localhost'],
    // If you need to specify port in image URLs:
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3100',
        // pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;

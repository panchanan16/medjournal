/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // If you need to specify port in image URLs:
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3100',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'app.farmclin.es',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

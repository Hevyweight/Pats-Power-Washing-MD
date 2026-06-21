import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'patspowerwashing.com' }],
        destination: 'https://www.patspowerwashing.com/:path*',
        permanent: true
      },
      {
        source: '/areas/:slug',
        destination: '/service-areas/:slug',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
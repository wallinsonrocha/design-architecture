import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', 
        hostname: 'pixabay.com',
        pathname: '/get/**', 
      },
    ],
  },
};

export default nextConfig;

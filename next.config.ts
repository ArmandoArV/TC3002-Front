import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dermatoss-images-bucket.s3.us-east-1.amazonaws.com"], // Add your hostname here
  },
};

export default nextConfig;

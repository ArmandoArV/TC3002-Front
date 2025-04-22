import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dermatoss-images-bucket.s3.us-east-1.amazonaws.com", "dermatoss-images-bucket.s3.amazonaws.com"], // Corrected hostnames
  },
};

export default nextConfig;
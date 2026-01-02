import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow Images */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.stripe.com",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;

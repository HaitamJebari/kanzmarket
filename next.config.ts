import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow Images */
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "example.com",
        // port: "",
        // pathname: "/images/**",
      }
    ],
  },
};

export default nextConfig;

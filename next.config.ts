import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations from vercel-labs/next-skills
  // - Enable React Compiler for better performance
  // - Optimize images and caching
  
  // Cache configuration
  experimental: {
    optimizeCss: true,
  },
  
  // Logging for debugging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;

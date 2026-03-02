import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimizing package imports can significantly reduce TBT by only including used code
  experimental: {
    optimizePackageImports: ["lucide-react", "@headlessui/react"],
  },
};


export default nextConfig;

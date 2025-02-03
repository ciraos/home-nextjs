import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "_next",
  output: "standalone",
  // pageExtensions: ["ts, tsx"],
  reactStrictMode: false
};

export default nextConfig;

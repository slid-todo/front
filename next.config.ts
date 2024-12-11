/* eslint-disable @typescript-eslint/no-require-imports */
import { NextConfig } from "next";
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  /* config options here */
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

// withBundleAnalyzer를 통해 nextConfig를 래핑
export default withBundleAnalyzer(nextConfig);
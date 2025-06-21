// next.config.js
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";


// 1. Import the bundle analyzer
//$env:ANALYZE="true"; npm run build
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  // enabled: process.env.ANALYZE === 'true', 
  enabled: false
});

const nextConfig: NextConfig = {
};

const configWithBundleAnalyzer = withBundleAnalyzer(nextConfig);

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(configWithBundleAnalyzer);
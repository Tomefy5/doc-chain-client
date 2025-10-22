import type { NextConfig } from "next";
import nextPWA from "next-pwa";

const withNextPWA = nextPWA({
  dest: 'public', // génère le service worker ici
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // pas de SW en dev
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false
  }
};

export default withNextPWA(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["picsum.photos"],
  },
  env: {
    TWITTER_BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN,
  },
};

module.exports = nextConfig;

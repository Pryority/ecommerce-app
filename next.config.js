/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['placeimg.com'],
  },
  assetPrefix: './',
};

module.exports = nextConfig;
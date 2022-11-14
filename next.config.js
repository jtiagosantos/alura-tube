/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com', 'img.youtube.com', 'avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;

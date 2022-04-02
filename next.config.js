/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = {
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
  nextConfig,
};

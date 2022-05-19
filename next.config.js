/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ['www.pngkey.com'],
  }
}
module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },

  images: {
    domains: ['www.pngkey.com', 'images.pexels.com', 'localhost', 'res-3.cloudinary.com'],
  },
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      // Add your image domains here, for example:
      'images.unsplash.com',
      'source.unsplash.com',
      'fakestoreapi.com',
      'i.imgur.com',
      'via.placeholder.com',
      'picsum.photos',
      'upload.wikimedia.org',
      // Add other domains as needed
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;

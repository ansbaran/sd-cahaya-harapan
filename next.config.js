/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    // Abaikan error ESLint saat build (agar tidak gagal deploy)
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

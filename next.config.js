/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      { protocol: 'https', hostname: 'logo.clearbit.com' },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig



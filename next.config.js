/** @type {import('next').NextConfig} */

const nextConfig = {  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:  new URL(process.env.API_BASE_URL).hostname
        // hostname: 'mashari-backend-1.hop.sh',
      },
    ],
  },}
module.exports = nextConfig

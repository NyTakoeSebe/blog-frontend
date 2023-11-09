/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4200',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;

const removeImports = require('next-remove-imports')();
module.exports = removeImports({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  async redirects() {
    return [{ source: '/commercial', destination: '/commercial/dashboard', permanent: true }];
  },
};

module.exports = nextConfig;

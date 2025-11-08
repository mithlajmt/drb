/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ✅ Skip build if there are TypeScript errors
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

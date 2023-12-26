/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  reactStrictMode: false,
  // Q: Why change this when testing component life cycle?
  env: {
    API_SERVER2: "http://localhost:3002",
  },
};

module.exports = nextConfig;

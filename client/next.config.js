/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_SERVER2: "http://localhost:3002",
  },
};

module.exports = nextConfig;

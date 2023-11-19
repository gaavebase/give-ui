/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["gateway.ipfscdn.io",process.env.NEXT_PUBLIC_CLIENT_ID+".ipfscdn.io"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    NEXT_PUBLIC_ZEGO_APP_ID:645680231,
    NEXT_PUBLIC_ZEGO_SERVER_ID:"959d7e336a2a21febbd59da5060db017",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;

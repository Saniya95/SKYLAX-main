/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    domains: ["scalyx-cms.onrender.com"],
    unoptimized: true,
  },
};

export default nextConfig;

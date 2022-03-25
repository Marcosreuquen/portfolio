/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    default: "en",
  },
  images: {
    domains: [
      "cdn.contentful.com",
      "assets.vercel.com",
      "images.ctfassets.net",
    ],
    formats: ["image/avif", "image/webp"],
  },
});

module.exports = nextConfig;

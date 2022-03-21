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
});

module.exports = nextConfig;

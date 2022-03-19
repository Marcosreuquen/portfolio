/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  // images: {
  //   domains: ["assets.vercel.com"],
  //   formats: ["image/jpg", "image/webp"],
  // },
};

module.exports = nextConfig;

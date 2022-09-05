module.exports = {
  i18n: {
    locales: ["am", "en"],
    defaultLocale: "en",
    localeDetection: true,
  },
  target: "serverless",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};
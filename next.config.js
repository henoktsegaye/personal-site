module.exports = {
  i18n: {
    locales: ["am", "en"],
    defaultLocale: "en",
    localeDetection: true,
  },
  target: "serverless",
  trailingSlash: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
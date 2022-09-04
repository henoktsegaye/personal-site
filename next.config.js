

/* eslint-disable */
const webpacked = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  }
};
webpacked.env = {
  host:
    process.env.NODE_ENV === 'production'
      ? 'https://henoktsegaye.com'
      : 'http://localhost:3000',
};
webpacked['i18n'] = {
  locales: ['en', 'am'],
  defaultLocale: 'en',
  localeDetection: true,
};
webpacked.eslint = {
  ignoreDuringBuilds: true,
};

module.exports = webpacked;
module.exports = {
  i18n: {
    defaultLocale: 'en',
    // Must include zz-pseudo so next-i18next loads worker-generated pseudo files (matches next.config.mjs)
    locales: ['en', 'fr', 'vi', 'zz-pseudo']
  },
  // i18next normalizes BCP47-ish tags (e.g. zz-pseudo → zz-PSEUDO). Without lowerCaseLng, that code is
  // rejected against supportedLngs and resources never load — UI falls back to English while JSON files exist.
  lowerCaseLng: true,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: './public/locales'
};

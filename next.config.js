const {i18n} = require('./next-i18next.config')

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  i18n,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/xp/harrypotter-joy',
        permanent: false,
      }
    ]
  },
  
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    domains: ['localhost', 'api.kinderpromo.kz']
  },
  basePath: '/kz',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.js', 'page.jsx'],
})

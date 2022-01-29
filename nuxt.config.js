import getRoutes from './utils/getRoutes'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'தமிழ் கவிதை Site 💚',
    meta: [
      // { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'X-UA-Compatible',
        content: 'IE=edge, chrome=1',
      },
      {
        name: 'HandheldFriendly',
        content: 'True',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'தமிழ் கவிதைகள் Site - Collect kavithai Around Social Media and Social Pages - Read Tamil Kavithai both online and offline.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'google-site-verification',
        content: 'QxmvHhutMiGiMrpbxSdTotoptJfbSqQuKC_nKXSISsQ',
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'application-name',
        content: 'kavithai Site',
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'white-translucent',
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'kavithai Site',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'தமிழ் கவிதை Site 💚',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'தமிழ் கவிதை Site 💚',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'தமிழ் கவிதைகள் Site - Collect kavithai Around Social Media and Social Pages - Read Tamil Kavithai both online and offline.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://kavithai.site/kavithai-cover.png',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://kavithai.site/',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'தமிழ் கவிதை Site 💚',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'தமிழ் கவிதைகள் Site - Collect kavithai Around Social Media and Social Pages - Read Tamil Kavithai both online and offline.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://kavithai.site/kavithai-cover.png',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://kavithai.site/',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@tamilsmsblog',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@tamilsmsblog',
      },
      {
        hid: 'twitter:label1',
        name: 'twitter:label1',
        content: 'Written by',
      },
      {
        hid: 'twitter:data1',
        name: 'twitter:data1',
        content: '@tamilsmsblog',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '48x48',
        href: '/icons/Icon-48x48.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/icons/Icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '96x96',
        href: '/icons/Icon-96x96.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/icons/Icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '192x192',
        href: '/icons/Icon-192x192.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '512x512',
        href: '/icons/Icon-512x512.png',
      },
      { rel: 'dns-prefetch', href: 'https://identity.netlify.com' },
    ],
  },
  loading: { color: '#e84b0d' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-unicons', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-buefy',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/feed',
    '@nuxtjs/sitemap',
  ],
  buefy: {
    materialDesignIcons: false,
  },
  meta: {
    name: 'தமிழ் கவிதை Site 💚',
    description:
      'தமிழ் கவிதைகள் Site - Collect kavithai Around Social Media and Social Pages - Read Tamil Kavithai both online and offline.',
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: false,
    manifest: {
      name: 'Kavithai',
      short_name: 'Kavithai',
      description:
        'Tamil Kavithai Site - Collect kavithai Around Social Media and Social Pages - Read Tamil Kavithai both online and offline.',
      icons: [
        {
          src: '/icons/Icon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/icons/Icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/icons/Icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/icons/Icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/icons/Icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/icons/Icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
      theme_color: '#ffffff',
      background_color: '#ffffff',
      start_url: '/?standalone=true',
      display: 'standalone',
      orientation: 'any',
      lang: 'en',
    },
  },
  googleFonts: {
    display: 'swap',
    prefetch: true,
    families: {
      'Baloo+Thambi+2': true,
    },
  },
  generate: {
    fallback: true,
  },
  sitemap: {
    hostname: 'https://kavithai.site/',
    trailingSlash: true,
    routes() {
      return getRoutes()
    },
  },
  feed() {
    const baseUrlArticles = `https://kavithai.site/blog/`
    const baseLinkFeedArticles = '/posts'
    const feedFormats = {
      rss: { type: 'rss2', file: 'rss.xml' },
      json: { type: 'json1', file: 'feed.json' },
    }
    // eslint-disable-next-line global-require
    const { $content } = require('@nuxt/content')

    const createFeedArticles = async function (feed) {
      feed.options = {
        title: 'Tamil Kavithai Site',
        description:
          'தமிழ் கவிதைகள் Site - Collect kavithai Around Social Media and Social Pages - Read Tamil Kavithai both online and offline.',
        link: baseUrlArticles,
      }
      const articles = await $content('articles').fetch()

      articles.forEach((article) => {
        const url = `https://kavithai.site/posts/${article.slug}/`

        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          description: article.description,
          content: article.description,
          author: 'Just Kavithai',
        })
      })
    }

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedArticles}/${file}`,
      type,
      create: createFeedArticles,
    }))
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },
}

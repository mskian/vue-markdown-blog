import getRoutes from './utils/getRoutes'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Just Random Tamil Kavithai',
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
          'Just a Random Tamil Kavithai Site Collect kavithai Around Social Media and Blogs.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'application-name',
        content: 'Just kavithai',
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
        content: 'Just kavithai',
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
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/feed',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
  buefy: {
    materialDesignIcons: false,
  },
  meta: {
    ogTitle: false,
    ogDescription: false,
    ogSiteName: false,
    ogType: false,
    name: 'Just Random Tamil Kavithai',
    description:
      'Just a Random Tamil Kavithai Site Collect kavithai Around Social Media and Blogs.',
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: false,
    manifest: {
      name: 'Just Kavithai',
      short_name: 'Just Kavithai',
      description:
        'Just a Random Tamil Kavithai Site Collect kavithai Around Social Media and Blogs.',
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
    hostname: 'https://tamilkavithai.netlify.app/',
    trailingSlash: true,
    routes() {
      return getRoutes()
    },
  },
  feed() {
    const baseUrlArticles = `https://tamilkavithai.netlify.app/blog/`
    const baseLinkFeedArticles = '/posts'
    const feedFormats = {
      rss: { type: 'rss2', file: 'rss.xml' },
      json: { type: 'json1', file: 'feed.json' },
    }
    // eslint-disable-next-line global-require
    const { $content } = require('@nuxt/content')

    const createFeedArticles = async function (feed) {
      feed.options = {
        title: 'Just Random Tamil Kavithai',
        description:
          'Just a Random Tamil Kavithai Site Collect kavithai Around Social Media and Blogs.',
        link: baseUrlArticles,
      }
      const articles = await $content({ deep: true }).fetch()

      articles.forEach((article) => {
        const url = `https://tamilkavithai.netlify.app/posts/${article.slug}/`

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

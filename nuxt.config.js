import { FileSystemIconLoader } from 'unplugin-icons/loaders'

const isDev = process.env.NODE_ENV === 'development'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'massCode snippet collection',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Community-driven ready to use snippet collection of HTML & CSS'
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'google-site-verification',
        content: 'h-rU1tSutO83wOyvi4syrk_XTvgennlUPkL6fMmq5cI'
      },
      // FB
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://masscode.io' },
      { property: 'og:title', content: 'massCode snippet collection' },
      {
        property: 'og:description',
        content:
          'Community-driven ready to use snippet collection of HTML & CSS'
      },
      { property: 'og:image', content: 'https://masscode.io/fb-image.png' },
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://masscode.io' },
      { property: 'twitter:title', content: 'massCode snippet collection' },
      {
        property: 'twitter:description',
        content:
          'Community-driven ready to use snippet collection of HTML & CSS'
      },
      {
        property: 'twitter:image',
        content: 'https://masscode.io/tw-image.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: '~assets/scss/main.scss',
      lang: 'scss'
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/ga',
    {
      src: '~plugins/breakpoint',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    [
      'unplugin-icons/nuxt',
      {
        customCollections: {
          unicons: FileSystemIconLoader(
            './node_modules/@iconscout/unicons/svg/line'
          )
        },
        iconCustomizer (collection, icon, props) {
          if (collection === 'unicons') {
            props.height = '24px'
            props.width = '24px'
          }
        }
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@emmetio/codemirror6-plugin']
  },
  router: {
    base: isDev ? '/' : '/snippets'
  },
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()
      return files.map((file) =>
        file.path === '/index' ? '/' : '/snippet' + file.path
      )
    }
  }
}

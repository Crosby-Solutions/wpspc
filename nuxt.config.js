export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Nuxt Deployment: prevent 404 error
  // https://nuxtjs.org/docs/2.x/deployment/netlify-deployment/
  generate: {
    fallback: true
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Willetton Primary School - P & C',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Willetton Primary School P&C, Parents and Citizens' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
    // https://www.npmjs.com/package/nuxt-stripe-module
    // 'nuxt-stripe-module'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  // Nuxt Stripe https://www.npmjs.com/package/nuxt-stripe-module
  // stripe: {
  //   publishableKey: 'pk_test_51J7VkUDhp3PAG4PDeo8YJdU09X6TAjKs94kuKM8AZpwhW1WMdu0vzysnEuYq5kJj4zftJDxdFBy57sbg0oh3oggV00L1WUZjtS',
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}

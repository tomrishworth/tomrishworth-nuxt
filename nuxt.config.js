const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const path = require("path");

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tom Rishworth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tom Rishworth - Portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    // 'bootstrap-vue/nuxt',

    // Or if you have custom bootstrap CSS...
    // ['bootstrap-vue/nuxt', { css: false }],

    ['nuxt-sass-resources-loader', [
        '@/node_modules/bootstrap/scss/_functions.scss',
        '@/node_modules/bootstrap/scss/_variables.scss',
        '@/node_modules/bootstrap/scss/_mixins.scss',
    ]],
  ],
  plugins: ['~/plugins/vue-cloudinary'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // vendor: ['vue-cloundinary'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

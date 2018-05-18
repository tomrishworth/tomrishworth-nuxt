const path = require("path");

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'tomrishworth2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    'bootstrap-vue/nuxt',

    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }],

    ['nuxt-sass-resources-loader', [
        '@/node_modules/bootstrap/scss/_functions.scss',
        '@/node_modules/bootstrap/scss/_variables.scss',
        '@/node_modules/bootstrap/scss/_mixins.scss',
    ]],
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      // const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      // vueLoader.options.loaders.scss = 'vue-style-loader!css-loader!sass-loader?' + JSON.stringify({
      //   data: [
      //     path.resolve(__dirname, '../node_modules/bootstrap/scss/_functions.scss'),
      //     path.resolve(__dirname, '../node_modules/bootstrap/scss/_variables.scss'),
      //     path.resolve(__dirname, '../node_modules/bootstrap/scss/_mixins.scss')
      //   ]
      // })
      if (isDev && isClient) {
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

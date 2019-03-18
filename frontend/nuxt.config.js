const path = require('path');
const rootPath = path.resolve(__dirname);

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'trello-clone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'trello clone project with Vue.js' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://trello.com/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/global.js'],
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
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // add Alias
      config.resolve.alias['_proto_'] = path.posix.resolve('components/prototype/');
      console.log(config.resolve);
    }
  }
}


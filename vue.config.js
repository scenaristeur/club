const publicPath = process.env.NODE_ENV === 'production' ? '/club/' : '/'

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: publicPath,
  // router en mode history
  //https://cli.vuejs.org/core-plugins/pwa.html#example-configuration
  //https://stackoverflow.com/questions/55590275/how-to-fix-that-url-query-params-are-not-working-via-the-web-share-target-api-in
  //https://github.com/nico-martin/todo-pwa
  //https://github.com/nico-martin/todo-pwa/blob/9ae64f77c622785e4be05bb1ce6ccfdbc96f43cc/vue/webpack.config.babel.js
  pwa: {
    name: 'Club',
    //  themeColor: '#4DBA87',
    //  msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      share_target: {
        action: publicPath+'bookmarks',
        method: "GET",
        enctype: "application/x-www-form-urlencoded",
        params: {
          title: "title",
          text: "text",
          url: "url"
        }
      },
    }
  },

  transpileDependencies: true
})

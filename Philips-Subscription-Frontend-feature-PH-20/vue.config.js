const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  // webpack.config
  configureWebpack: config => {
    config.resolve.alias['assets'] = resolve('src/assets')
    config.resolve.alias['components'] = resolve('src/components')
    config.resolve.alias['sass'] = resolve('src/sass')
    config.resolve.alias['views'] = resolve('src/views')
    config.resolve.alias['store'] = resolve('src/store')
    config.resolve.alias['mixins'] = resolve('src/mixins')
    config.resolve.alias['siteConfig'] = resolve(`app-config/app.${process.env.NODE_ENV || 'dev'}.config`)

    config.plugins.push(new StyleLintPlugin({
      files: [
        'src/**/*.vue',
        'src/sass/**/*.scss'
      ]
    })
    )
  },
  // css
  css: {
    loaderOptions: {
      sass: {
        data: `@import 'sass/global.scss';`
      }
    }
  }
}

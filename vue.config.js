module.exports = {
  outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        comments: '@/components'
      }
    }
  }
}

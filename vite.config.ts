module.exports = {
  port: 3000,
  hostname: 'localhost',
  open: false,
  alias: {
    '/@/': '//src/examples', // 配置样例文件的访问路径别名
    '/@packages/': '//src/packages' // 配置开发的ui库文件访问路径别名
  },
  cssPreprocessOptions: {
    scss: {
      prependData: `@import "/@packages/theme";`
    }
  }
}
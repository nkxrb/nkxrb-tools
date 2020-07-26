// 引入必要的函数
const execa = require('execa') // 脚本执行函数
const args = require('minimist')(process.argv.slice(2), {
  boolean: ["prod"] // 表示prod参数属于Boolean类型的参数，未定义时会自动解析成false，若要解析成空字符串，可使用string:['命令参数名']
}) // minimist是轻量级的命令行参数解析引擎

const argsValueArr = args._ // 获取参数的数组
const env = args.prod || args.p ? 'production' : 'development' // 环境配置参数
const formats = args.formats || args.f // 打包格式
const sourceMap = args.sourcemap || args.s // sourcemap配置

// 执行打包构建操作
build()

async function build () {

  await execa(
    'rollup',
    [
      '-c',
      '--environment',
      [
        `NODE_ENV:${env}`,
        formats ? `FORMATS:${formats}` : ``,
        sourceMap ? `SOURCE_MAP:true` : ``
      ]
        .filter(Boolean)
        .join(',')
    ],
    { stdio: 'inherit' }
  )
  return
}
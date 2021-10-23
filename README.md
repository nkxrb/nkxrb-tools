# nkxrb tools
开发各种实用工具Utils。使用vite + typescript打包，使用方便，类型提示更友好



## 已完成的工具有：

| 函数名               | 参数                                                         | 返回值 | 说明                             |
| -------------------- | ------------------------------------------------------------ | ------ | -------------------------------- |
| listenElResize       | el: HTMLElement, fn: (entry?: ResizeObserverEntry) => void   | --     | 监听指定Div宽高变化              |
| removeListenElResize | el: HTMLElement（注意，此参数需要和添加监听的el为同一个对象） | --     | 移除该Div上的大小监听事件        |
| largePlus            | a: string, b: string                                         | string | 两个可能超过number存储的整数相加 |
| getTextWidth         | text: string, font: string = 'blod 12px Arial'        | number | 计算一段文字在浏览器中的宽度     |
|                      |                                                              |        |                                  |

  


### 使用到的技术
- 语言环境 nodejs  12.18.2 / 部分工具仅适用于浏览器客户端（因为要使用到window、document内置对象）
- 类型推导 typescript 
- 打包工具 vite
- 测试工具 jest 
- 兼容配置 babel （IE11 + 谷歌）

### 目录结构
- docs 说明文档
- examples 使用样例
- libs 最终的打包文件目录
- packages UI库源码根目录
- plugins 使用到的插件
- test 测试文件
- .eslintrc.js 代码格式约束文件
- .gitignore git提交忽略文件
- package.json 基本信息、执行命令、依赖包配置文件
- README.md 项目说明文件
- tsconfig.json TypeScript配置文件
- vite.config.ts vite打包工具配置文件
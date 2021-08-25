# nkxrb tools
开发各种实用组件，支持vue2.x、vue3.x、react16以上、原生js。并使用rollup、vite、webpack三种打包方式
具体实现方式，可以切换分支查看

## 当前分支-master
已原生JS方式实现组件，打包方式采用rollup
已完成的组件有：
- drag: 自由拖拽div容器（支持PC、移动端）
- 


### 使用到的技术
- 语言环境 nodejs  12.18.2
- 类型推导 typescript 
- 前置依赖 vue  ^3.x
- 打包工具 rollup 
- 测试工具 jest 
- 兼容配置 babel （暂不考虑，后面会补上）

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
import resolve from 'rollup-plugin-node-resolve' // 这样 Rollup 能找到 `ms` 即第三方依赖
import commonjs from 'rollup-plugin-commonjs' // 这样 Rollup 能转换 `ms` 为一个ES模块
import babel from 'rollup-plugin-babel' // 兼容ES5以上
import uglify from 'rollup-plugin-uglify-es' //js压缩
import vue from 'rollup-plugin-vue' // 处理vue文件
import json from 'rollup-plugin-json' // 可从 JSON 文件中读取数据
import postcss from 'rollup-plugin-postcss' // 样式处理
import replace from 'rollup-plugin-replace' // 替换一些常量
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

import { terser } from 'rollup-plugin-terser'
import { eslint } from 'rollup-plugin-eslint'

// 处理node的内置模块,发布node的第三方{builtins, globals}
// import builtins from 'rollup-plugin-node-builtins';
// import globals from 'rollup-plugin-node-globals';

import pkg from './package.json';

const isDev = process.env.NODE_ENV !== 'production';

const env = 'development'

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      file: 'lib/index.js',
      format: 'iife'
    },
    plugins: [
      resolve({ extensions: ['.vue'] }),
      commonjs(),
      uglify(),
      vue({ target: 'browser' }),
      json(),
      postcss({
        plugins: [autoprefixer, cssnano],
        extract: 'lib/css/bundle.css' // 输出路径
      }),
      eslint({
        throwOnError: true,
        throwOnWarning: true,
        include: ['src/**'],
        exclude: ['node_modules/**', 'plugins/**']
      }),
      babel({
        exclude: ['node_modules/**', 'plugins/**'],
        // 使plugin-transform-runtime生效
        runtimeHelpers: true,
      }),
      !isDev && terser(),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
        'process.env.VUE_ENV': JSON.stringify(env)
      })
    ],
    banner: '/* BudGiant UI version ' + pkg.version + ' */',
    footer: '/* content me on email! w626023781@163.com */'
  }
];
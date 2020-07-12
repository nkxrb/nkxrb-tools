import resolve from 'rollup-plugin-node-resolve'; // 这样 Rollup 能找到 `ms` 即第三方依赖
import commonjs from 'rollup-plugin-commonjs'; // 这样 Rollup 能转换 `ms` 为一个ES模块
import babel from 'rollup-plugin-babel'; // 可从 JSON 文件中读取数据
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';

// 处理node的内置模块,发布node的第三方{builtins, globals}
// import builtins from 'rollup-plugin-node-builtins';
// import globals from 'rollup-plugin-node-globals';

import pkg from './package.json';

const isDev = process.env.NODE_ENV !== 'production';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      file: 'lib/index.cjs',
      format: 'cjs'
    },
    plugins: [
      resolve(),
      commonjs(),
      json(),
      eslint({
        throwOnError: true,
        throwOnWarning: true,
        include: ['src/**'],
        exclude: ['node_modules/**']
      }),
      babel({
        exclude: 'node_modules/**',
        // 使plugin-transform-runtime生效
        runtimeHelpers: true,
      }),
      !isDev && terser()
    ],
    banner: '/* BudGiant UI version ' + pkg.version + ' */',
    footer: '/* content me on email! w626023781@163.com */'
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'packages/alert/alert.js',
    external: ['ms'],
    output: [
      { file: 'lib/alert.cjs', format: 'cjs' }
    ]
  }
];
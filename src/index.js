/** 
 * 用于适配开发环境
 * 支持import引用、require引用、<script>标签引用
 * globalName 组件的全局名称
 */
// (function (root, globalName, factory) {
//   if (typeof define === 'function' && define.amd) {
//     // AMD:
//     define([], factory);
//   } else if (typeof module === 'object' && module.exports) {
//     // Node:
//     module.exports = factory();
//     // Use module export as simulated ES6 default export:(将模块导出用作模拟ES6默认导出)
//     module.exports.default = module.exports;
//   } else {
//     // Browser:
//     window[globalName] = factory();
//   }
// }(this, 'BudGiant', function () {
//   'use strict';
//   return function budGiant (data) {
//     return ({}).toString.call(data).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
//   }
// }));

import * as alert from '../packages/alert/alert.js'
import * as button from '../packages/button/button.js'

export {
  alert,
  button
}  
/**
 * 函数柯里化封装
 * 功能特性：将多个参数拆分，这样就可以缓存开头几个参数执行的结果
 * 应用场景：前几个参数固定，且调用频繁的函数，进行柯里化处理
 * 示例：fn(1,2,3,4) => fn(1)(2)(3)(4)
 */
const currying = function (this: any, fn: Function, args?: Array<any>): Function {
  let _this = this
  let len = fn.length // 此处获取的是原函数定义了多少参数
  args = args || []

  return function () {
    let _args = Array.prototype.slice.call(arguments)
    Array.prototype.push.apply(args, _args)

    if (args && args.length < len) {
      return currying.call(_this, fn, args)
    }

    return fn.apply(_this, args)
  }

}

export { currying }
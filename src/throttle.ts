/**
 * 节流的简单实现
 * @param fn 需要延迟的方法
 * @param intervalTime 延迟时间
 * @returns 返回一个新函数
 */
const throttle = (fn: Function, intervalTime: number): Function => {
  let timerId = null
  let flag = false
  return function (this: any, ...args: Array<any>) {
    let _self = this
    if (!flag) {
      timerId = setTimeout(function () {
        fn.apply(_self, args)
        flag = false
      }, intervalTime)
      flag = true
    }
  }
}

export { throttle }
/**
 * 去抖动的简单实现
 * @param fn 需要延迟的方法
 * @param intervalTime 延迟时间
 * @returns 返回一个新函数
 */

const debounce = (fn: Function, intervalTime: number): Function => {
  let timerId: NodeJS.Timeout | undefined
  let flag = false
  return function (this: any, ...args: Array<any>) {
    let _self = this
    if (timerId) {
      timerId && clearTimeout(timerId)
      timerId = setTimeout(() => {
        fn.apply(_self, args)
        flag = false
        timerId && clearTimeout(timerId)
        timerId = undefined
      }, intervalTime)
    }
  }
}

export default debounce
/**
 * 去抖动的简单实现
 * @param fn 需要延迟的方法
 * @param intervalTime 延迟时间
 * @returns 返回一个新函数
 */

const debounce = (fn: Function, intervalTime: number): Function => {
  let timerId: NodeJS.Timeout | undefined
  let res: any = undefined
  return function (this: any, ...args: Array<any>) {
    timerId && clearTimeout(timerId)
    timerId = setTimeout(() => {
      res = fn.apply(this, args)
    }, intervalTime)
  }
}

export { debounce }
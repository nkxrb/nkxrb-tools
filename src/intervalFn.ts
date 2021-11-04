/**
 * 将单次执行的函数转换成一定时间间隔内，批量执行的函数
 * @param fn 要节流执行的函数
 * @param intervalTime 间隔时间，单位：ms
 * @returns 返回一个新的函数function，用来代替原来的函数
 */
const intervalFn = function <T>(fn: Function, intervalTime: number): Function {
  let flag: Boolean = false
  let timerId: NodeJS.Timeout | undefined
  let data: Array<T> = []
  return function (param: T) {
    data.push(param)
    if (!flag) {
      flag = true
      timerId && clearTimeout(timerId)

      if (data.length === 0) return 'finish'

      timerId = setTimeout(function () {
        fn(data)
        flag = false
        data.length = 0
      }, intervalTime)
    }
  }
}

export { intervalFn }
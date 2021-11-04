/**
 * 存储每一次的计算逻辑，提高重复调用的性能，经典案例：斐波那契
 *
 * 闭包缓存设计案例
 * 通过隔离私有变量，缓存函数之前执行的结果，当函数再次执行时会先判断
 * 缓存中是否存在，避免重复计算，经典的斐波那契函数实现
 *
 * @param fn 
 * @returns 
 */
const readCache = (fn: Function) => {
  let res: Array<number> = []
  return function (this: any, key: number) {
    if (res[key]) {
      return res[key]
    }
    res[key] = fn.call(this, key)
    return res[key]
  }
}

/**
 * 闭包缓存设计案例
 * 通过隔离私有变量，缓存函数之前执行的结果，当函数再次执行时会先判断
 * 缓存中是否存在，避免重复计算，经典的斐波那契函数实现
 */
const fibonacciSlow = (n: number): number => {
  if (n < 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

/**
 * 使用缓存后的斐波那契，二次计算会快很多
 */
const fibonacci = readCache(fibonacciSlow)

export { readCache, fibonacci }
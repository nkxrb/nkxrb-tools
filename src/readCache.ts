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
  let res: Map<string | number, unknown> = new Map()
  return function (this: any, key: string | number, ...args: Array<any>) {
    if (res.has(key)) {
      return res.get(key)
    }
    let result = fn.apply(this, [key, ...args])
    res.set(key, result)
    return result
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
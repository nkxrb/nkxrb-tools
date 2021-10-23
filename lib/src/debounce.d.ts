/**
 * 去抖动的简单实现
 * @param fn 需要延迟的方法
 * @param intervalTime 延迟时间
 * @returns 返回一个新函数
 */
declare const debounce: (fn: Function, intervalTime: number) => Function;
export default debounce;

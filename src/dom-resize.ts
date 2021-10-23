import ResizeObserver from 'resize-observer-polyfill'
import throttle from 'lodash/throttle'

const addResizeObserverEl = (() => {
  const fnMap = new Map()
  const ro = new ResizeObserver((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      fnMap.get(entry.target)(entry)
    }
  })
  return (el: HTMLElement, fn?: (entry?: ResizeObserverEntry) => void) => {
    if (!fnMap.has(el) && fn) {
      fnMap.set(el, throttle(fn, 100))
      ro.observe(el)
    } else {
      fnMap.delete(el)
      ro.unobserve(el)
    }
  }
})()

export function listenElResize(el: HTMLElement, fn: (entry?: ResizeObserverEntry) => void) {
  addResizeObserverEl(el, fn)
}
export function removeListenElResize(el: HTMLElement) {
  addResizeObserverEl(el)
}

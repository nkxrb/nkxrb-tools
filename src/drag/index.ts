import { debounce } from 'lodash-es'

export class Drag {
  el: HTMLElement
  active: boolean
  moveFlag: string
  innerX: number
  innerY: number
  parent: HTMLElement | null
  parentX: number
  parentY: number
  maxX: number
  maxY: number
  resize: Function

  static borderLineHtmlText = `
    <div class="__border_line" style=""></div>
    <div class="__dot_lt" style="left: -4px;top: -4px;cursor: nw-resize;"></div>
    <div class="__dot_lb" style="left: -4px;bottom: -4px;cursor: ne-resize;"></div>
    <div class="__dot_rt" style="right: -4px;top: -4px;cursor: ne-resize;"></div>
    <div class="__dot_rb" style="right: -4px;bottom: -4px;cursor: nw-resize;"></div
  `

  constructor(el: HTMLElement) {
    const { parentElement } = el

    this.el = el
    this.active = false
    this.moveFlag = ''
    this.innerX = 0
    this.innerY = 0
    document.querySelector('#123')

    this.parent = parentElement
    this.parentX = parentElement.offsetLeft
    this.parentY = parentElement.offsetTop
    this.maxX = parentElement.offsetWidth
    this.maxY = parentElement.offsetHeight

    this.resize = debounce(function (left, top, width, height) {
      this.el.style.width = width + 'px'
      this.el.style.height = height + 'px'
      this.resetPos(left, top)
    }, 100)

    parentElement.addEventListener('mousedown', (e) => {
      this.down(e)
    })
    parentElement.addEventListener('mousemove', (e) => {
      this.move(e)
    })
    parentElement.addEventListener('mouseup', (e) => {
      this.up(e)
    })
  }

  static curSelect = null

  resetPos(left: number, top: number, right: number, bottom: number) {
    let { offsetHeight, offsetWidth } = this.el

    if (top < 0) {
      top = 0
    }
    if (left < 0) {
      left = 0
    }

    if (left + offsetWidth > this.maxX) {
      left = this.maxX - offsetWidth
    }

    if (top + offsetHeight > this.maxY) {
      top = this.maxY - offsetHeight
    }
    this.el.style.left = left + 'px'
    this.el.style.top = top + 'px'
    this.el.style.right = right + 'px'
    this.el.style.bottom = bottom + 'px'
  }

  isSelect(e: { pageX: any; pageY: any }) {
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = this.el
    const { pageX, pageY } = e
    let offsetX = pageX - this.parentX
    let offsetY = pageY - this.parentY
    return offsetX >= offsetLeft
      && offsetX <= (offsetLeft + offsetWidth)
      && offsetY >= offsetTop
      && offsetY <= (offsetTop + offsetHeight)
  }

  down(e: MouseEvent) {
    let { target, button, pageX, pageY, touches } = e

    if (typeof e.stopPropagation !== 'undefined') {
      e.stopPropagation()
    }
    if (typeof e.preventDefault !== 'undefined') {
      e.preventDefault()
    }

    let isDrag = this.isSelect(e)

    if (target.parentElement === this.el && target.className.startsWith('__dot')) {
      this.moveFlag = target.className.substring(6, 8)
      this.parent.style.cursor = (this.moveFlag === 'lt' || this.moveFlag === 'rb') ? 'nw-resize' : 'ne-resize'
      return
    } else if (target.className.startsWith('__dot') && Drag.curSelect !== this) {
      return
    } else if (isDrag) {
      let { offsetLeft, offsetTop } = this.el
      this.innerX = pageX - offsetLeft
      this.innerY = pageY - offsetTop
      this.moveFlag = 'drag'
      this.parent.style.cursor = 'default'
    }

    if (isDrag && this.active) {
      return
    } else if (isDrag) {
      this.select()
    } else {
      this.deselect()
    }

  }

  up(e: MouseEvent) {
    this.moveFlag = ''
    this.parent.style.cursor = 'default'
  }

  move(e: MouseEvent) {
    let { pageY, pageX } = e
    let { offsetLeft, offsetTop, offsetHeight, offsetWidth } = this.el
    let offsetX = pageX - this.parentX
    let offsetY = pageY - this.parentY

    switch (this.moveFlag) {
      case 'rb':
        this.resize(offsetLeft, offsetTop, offsetX - offsetLeft, offsetY - offsetTop)
        break
      case 'rt':
        if (offsetY > offsetTop + offsetHeight) {
          offsetY = offsetTop + offsetHeight
        }
        this.resize(offsetLeft, offsetY, offsetX - offsetLeft, offsetHeight - offsetY + offsetTop)
        break
      case 'lt':
        if (offsetY > offsetTop + offsetHeight) {
          offsetY = offsetTop + offsetHeight
        }
        if (offsetX > offsetLeft + offsetWidth) {
          offsetX = offsetLeft + offsetWidth
        }
        this.resize(offsetX, offsetY, offsetWidth - offsetX + offsetLeft, offsetHeight - offsetY + offsetTop)
        break
      case 'lb':
        if (offsetX > offsetLeft + offsetWidth) {
          offsetX = offsetLeft + offsetWidth
        }
        this.resize(offsetX, offsetTop, offsetWidth - offsetX + offsetLeft, offsetY - offsetTop)
        break
      case 'drag':
        this.resize(pageX - this.innerX, pageY - this.innerY, offsetWidth, offsetHeight)
        break
      default: break
    }

  }

  select() {
    this.active = true
    if (Drag.curSelect && Drag.curSelect !== this) {
      Drag.curSelect.deselect()
    }
    Drag.curSelect = this
    this.el.innerHTML = Drag.borderLineHtmlText + this.el.innerHTML
  }

  deselect() {
    this.active = false
    this.moveFlag = ''
    this.el.innerHTML = this.el.innerHTML.replace(Drag.borderLineHtmlText, '')
  }

}

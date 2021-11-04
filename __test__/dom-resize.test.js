import { listenElResize, removeListenElResize } from '../src/domResize'

const { ResizeObserver } = window;

beforeEach(() => {
  //@ts-ignore
  delete window.ResizeObserver;
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  jest.restoreAllMocks();
});
describe('<div></div>', () => {
  it('test dom resize', done => {
    const containerEl = document.createElement('div')
    containerEl.style.width = '200px'
    containerEl.style.height = '200px'
    const childEl = document.createElement('div')
    childEl.style.width = '100%'
    childEl.style.height = '100%'
    containerEl.appendChild(childEl)

    listenElResize(childEl, entry => {
      if (containerEl.style.width === '1000px') {
        done()
      }
      expect(childEl.offsetWidth).toEqual(containerEl.style.width)
      expect(childEl.offsetHeight).toEqual(containerEl.style.height)
    })

    setTimeout(() => { containerEl.style.width = '400px' }, 50)
    setTimeout(() => { containerEl.style.height = '600px' }, 50)
    setTimeout(() => { containerEl.style.width = '800px'; containerEl.style.height = '800px' }, 50)
    setTimeout(() => { containerEl.style.width = '1000px' }, 50)

  })
})

const { debounce } = require('../lib/nkxrb-common.umd.js')

test('test debounce', (done) => {
  let count = 0
  function printA () {
    count++
  }
  const delayPrintA = debounce(printA, 300, { 'maxWait': 300 })

  let timer = setInterval(delayPrintA, 100)

  setTimeout(() => {
    clearInterval(timer)
    expect(count).toBe(6);
    done();
  }, 1000)
})




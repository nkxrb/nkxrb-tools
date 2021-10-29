import { debounce } from '../src/debounce'

test('test debounce', (done) => {
  let myCount = 0
  let myVal = ''

  const delayIncrease = debounce(val => {
    myCount++
    myVal = val
  }, 32)

  setTimeout(() => {
    delayIncrease('a')
    delayIncrease('b')
    delayIncrease('c')
    expect(myCount).toBe(0)
    expect(myVal).toEqual('')
  }, 100)

  setTimeout(() => {
    delayIncrease('d')
    expect(myCount).toBe(1)
    expect(myVal).toEqual('c')
    delayIncrease('e')
    delayIncrease('f')
  }, 200)

  setTimeout(() => {
    expect(myCount).toBe(2)
    expect(myVal).toEqual('f')
    done();
  }, 300)
})




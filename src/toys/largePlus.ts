/**
 * 两个可能超过number存储的整数相加
 * @param {string} a 可能超过number存储的整数
 * @param {string} b 可能超过number存储的整数
 */
function largePlus(a: string, b: string): string {
  let res = []
  let carry = 0
  let i = a.length - 1
  let j = b.length - 1

  while (i >= 0 || j >= 0) {
    let val = Number(a[i--] || 0) + Number(b[j--] || 0) + carry
    res.push(val % 10)
    carry = Math.floor(val / 10)
  }

  if (carry > 0) {
    res.push(carry)
  }

  return res.reverse().join('')
}

export default largePlus
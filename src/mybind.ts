
Function.prototype.mybind = function (ctx, ...args) {
  return (...innerArgs: any) => this.call(ctx, ...args, ...innerArgs)
}

export default Function
// 函数
function pow(x) {
  return x * x
}
console.log('pow(3): ', pow(3))

// 匿名函数
const pow2 = x => x * x
console.log('pow2(3): ', pow2(3))
// 直接使用匿名函数
console.log('=> : ', (x => x * x)(3))

// 不能省略 {...}
const pow3 = x => {
  if (x >= 0) return x * x
  else return -x * x
}
console.log('pow3(3): ', pow3(3))

// 超过1个参数
const f1 = (x, y) => x * x + y * y
console.log('f1(1, 2): ', f1(1, 2))

// 无参数
const pi = () => 3.14
console.log('pi(): ', pi())

// 可变参数
const f2 = (x, y, ...rest) => {
  var i,
    sum = x + y
  for (i = 0; i < rest.length; i++) {
    sum += rest[i]
  }
  return sum
}
console.log('f2(1, 2, 3, 4, 5): ', f2(1, 2, 3, 4, 5))

// 返回对象
const f3 = x => ({ foo: x })
console.log('f3(4): ', f3(4))

// 箭头函数看起来像匿名函数，实际上匿名函数无法使用this
var obj = {
  birth: 1990,
  getAge: function() {
    var b = this.birth // 1990
    var fn = () => new Date().getFullYear() - this.birth // this指向obj对象
    return fn()
  }
}
console.log(obj.getAge()) // 25

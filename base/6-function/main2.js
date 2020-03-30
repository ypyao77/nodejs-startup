// 可以直接在另一个函数的括号中定义和传递这个函数

function execute(someFunction, value) {
  someFunction(value)
}

execute(function(word) {
  console.log(word)
}, 'Hello')

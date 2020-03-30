async function test() {
  console.log('Hello')
  await sleep(1000)
  console.log('world!')
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

console.log('1....')
test()
console.log('2....')

// var coroutine = require("coroutine");

// console.log('Hello');
// coroutine.sleep(1000);
// console.log('world!');

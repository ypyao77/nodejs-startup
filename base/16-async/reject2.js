let handler = async function(err) {
    console.log('handler(): ', err)
    return new Promise((resolve, reject) => {
        if (err) {
            reject(new Error('执行失败，给出错误'))
        } else {
            resolve('执行成功，没有报错')
        }
    })
}

// 写法1
async function func1(v) {
  try {
    await handler(v);
  } catch (err) {
    console.log(err);
  }
}

// 写法2
async function func2(v) {
  await handler(v).catch(function(err) {
    console.log(err);
  });
}

console.log("--------------")
func1(0)
func1(true)
func1(false)

console.log("--------------")
func2(0)
func2(true)
func2(false)
console.log("--------------")
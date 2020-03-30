let handler = async function(needErr) {
  return new Promise((resolve, reject) => {
    if (needErr) {
      reject(new Error('执行失败，给出错误'))
    } else {
      resolve('执行成功，没有报错')
    }
  })
}

let run = async function() {
  let result = await handler(false).catch()
  console.log(result)
  result = await handler(true).catch()
  console.log(result)
}

run()

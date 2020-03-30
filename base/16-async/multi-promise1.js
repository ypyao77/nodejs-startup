function takeTime(t) {
  return new Promise(resolve => {
    setTimeout(() => resolve('take time: ' + t), t)
  })
}

async function func1() {
  let times = [3000, 4000, 5000]
  let promises = times.map(tm => {
    return takeTime(tm)
  })

  let results = await Promise.all(promises)
  console.log(results)

  func2()
}

async function func2(db) {
  let times = [3000, 4000, 5000]
  let promises = times.map(tm => {
    return takeTime(tm)
  })

  let results = []
  for (let promise of promises) {
    results.push(await promise)
  }
  console.log(results)
}

func1()
func2()

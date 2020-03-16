function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}

function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}

function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}


async function doIt() {
    console.time('doIt');
    const time1 = 300;
    const time2 = await step1(time1);
    console.log('[step] 1')
    const time3 = await step2(time2);
    console.log('[step] 2')
    const result = await step3(time3);
    console.log('[step] 3')
    console.log(`result is ${result}`);
    console.timeEnd("doIt");
}

doIt();

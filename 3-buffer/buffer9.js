// 缓冲区裁剪
var buffer1 = Buffer.from('runoob');

// 剪切缓冲区
var buffer2 = buffer1.slice(2,5);
console.log("buffer2 content: " + buffer2.toString());

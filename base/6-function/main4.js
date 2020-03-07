// 我们向 createServer 函数传递了一个匿名函数
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);
console.log("starting http server on 8888")
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request, response) {
    var url = request.url;
    if(request.url == '/') {
        url = '/index.html';
    }

    if (request.url == '/favicon.ico') {
        return response.writeHead(404);
    }

    response.writeHead(200);

    // 웹 브라우저가 요청한 파일 경로를 콘솔에 출력
    console.log(__dirname + url);

    // response.end()
    // => 웹 서버가 웹 브라우제의 요청에 응답하는 명령
    // => 괄호 안의 내용을 웹 브라우저에 전달
    // => node.js의 기능 중 fs.readFileSync를 이용해 웹 브라우저가 요청한 파일(__dirname + url)을 읽어서 응답
    response.end(fs.readFileSync(__dirname + url));
})
app.listen(3000)
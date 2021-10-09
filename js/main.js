var http = require('http');
var fs = require('fs');
var url = require('url'); 

function templateHTML(title, list, body) {
    return `
    <!doctype html>
    <html>
        <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            ${body}
        </body>
    </html>
    `
}

function templateList(filelist) {
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length) {
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i = i + 1;
    }
    list = list + '</ul>';

    return list
}

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname; // 경로이름만 추출하여 저장
    var title = queryData.id;
    
    if(pathname === '/') { // 사용자가 접속한 url이 루트라면 실행
        if(queryData.id === undefined) { // 홈 일때
            var title = 'Welcome';
            var description = 'Hello, Node.js';

            fs.readdir('./data', function(error, filelist) {
                var list = templateList(filelist);

                var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);

                response.writeHead(200);
                response.end(template);
            });
        } else { // 홈이 아닐 때
            fs.readdir('./data', function(error, filelist) {
                var list = templateList(filelist);

                fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
                    var title = queryData.id;
                    var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);
    
                    response.writeHead(200);
                    response.end(template);
                });
            });
        }
    } else { // 사용자가 접속한 url이 루트가 아니라면 실행
        response.writeHead(404);
        response.end('Not Found');
    }
})

app.listen(3000)
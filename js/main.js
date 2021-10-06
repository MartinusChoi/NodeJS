var http = require('http');
var fs = require('fs');
var url = require('url'); 

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    var title = queryData.id;
    
    if(_url == '/') { // 요청받은 url이 루트이면 실행!
        title = 'Welcome';
    }

    if (_url == '/favicon.ico') {
        return response.writeHead(404);
    }

    response.writeHead(200);

    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) { // `data/${queryData.id}`에서 읽어온 내용을 'description'에 저장
        var template = `
        <!doctype html>
        <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/">WEB</a></h1>
                <ul>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ul>
                <h2>${title}</h2>
                <p>${description}</p>
            </body>
        </html>
        `;

        response.end(template);
    });
})
app.listen(3000)
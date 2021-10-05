var http = require('http');
var fs = require('fs');

// application에 url이라는 모듈이 필요하다고 Node.js에게 요구하는 것.
// 이렇게 main.js에서 url이라는 변수를 통해 Node.js의 url모듈에 담긴 기능을 사용할 수 있음.
var url = require('url'); 

var app = http.createServer(function(request, response) {
    var _url = request.url; // 사용자가 요청한 URL
    var queryData = url.parse(_url, true).query; // url모듈을 이용해 사용자가 요청한 url중 쿼리 스트링만을 추출해서 '객체'로 반환!
    console.log(queryData.id); // url에서 id라고 요청한 이름을 그대로 main.js에서 이용하면 그 값을 볼 수 있음!
    var title = queryData.id;
    
    if(_url == '/') { // 요청받은 url이 루트이면 실행!
        title = 'Welcome';
    }

    if (_url == '/favicon.ico') {
        return response.writeHead(404);
    }

    response.writeHead(200);

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
            <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
            <img src="coding.jpg" width="100%">
            </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
            </p>
        </body>
    </html>
    `

    // 웹 브라우저가 요청한 파일 경로를 콘솔에 출력
    // console.log(__dirname + _url);

    // response.end()
    // => 웹 서버가 웹 브라우제의 요청에 응답하는 명령
    // => 괄호 안의 내용을 웹 브라우저에 전달
    // => node.js의 기능 중 fs.readFileSync를 이용해 웹 브라우저가 요청한 파일(__dirname + url)을 읽어서 응답
    // response.end(fs.readFileSync(__dirname + _url));
    response.end(template); // 템플릿 리터럴로 응답
})
app.listen(3000)
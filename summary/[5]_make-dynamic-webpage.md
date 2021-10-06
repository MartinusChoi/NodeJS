# 동적인 웹 페이지 만들기

아래와 같이 `main.js`를 바꾸어 보자.

```javascript
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
    
    response.end(template); // 템플릿 리터럴로 응답
})
app.listen(3000)
```

**템플릿 리터럴**을 사용하여 html 코드를 `template` 변수에 담았고, 이를 `response.end(template)`와 같이 반환하여 주었다.
- 이때, 페이지의 헤드와 제목을 요청받은 url의 id값으로 바꿔주기 위해 `${}` 형식을 사용하였고, 각 `<a>` 태그의 `href` 속성도 눌렀을 때 해당 쿼리스트링을 가진 url로 이동할 수 있도록 바꾸어주었다.

> 이를 동작시켜보면, 링크에 들어갈 때 마다 페이지의 제목이 바뀌어 보이는 것을 확인할 수 있다. 웹 페이지를 동적으로 생성한 것이다.

> 이렇게 하면 웹 페이지상에서 **사용자 요청에 따라 변경해야 하는 부분은 쿼리 스트링을 이용해 다르게 표현**하고, **나머지 부분은 공통된 소스를 재활용**함으로써 **유지보수를 편리**하게 할 수 있다.
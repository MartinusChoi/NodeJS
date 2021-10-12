# Node.js로 Web Server 만들기

웹 서버에는 `아파치(Apache)`, `엔진엑스(NGINX)`, `IIS(Internet Information Service)` 등 여러가지가 있다.
> `Node.js`도 웹 서버의 기능을 내장하고 있다.

---

## 1. HTML 파일 준비

웹 서버가 제대로 동작하는지 확인하기 위해 웹 브라우저로 HTML 파일을 요청해서 불러오게 하기 위한 파일을 준비한다.
- 실습 시에는 [여기](https://github.com/web-n/web1_html_internet)에서 받은 html 파일을 사용하였다.

```
.
├── 1.html
|
├── 2.html
|
├── 3.html
|
├── coding.jpg
| 
└── index.html
```

## 2. main.js 파일 만들기

Node.js가 웹 서버로서 동작하게 하는 파일(`main.js`)을 만든다.

```
.
├── 1.html
|
├── 2.html
|
├── 3.html
|
├── coding.jpg
| 
├── index.html
|
└── main.js
```

이제 `main.js`에 아래와 같이 작성해준다.

(아직 모든 소스코드를 이해하지 못하더라도 천천히 배워나가자.)

```javascript
var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request, response) {
    var url = request.url;

    if(request.url == '/') {
        url = '/index.html';
    }

    if(request.url == '/favicon.ico') {
        return response.writeHead(404);
    }

    response.writeHead(200);
    response.end(fs.readHileSync(__dirname + url));
});

app.listen(3000);
```

## 3. 웹 서버 켜기

cmd 창에서 실습 디렉터리 까지 이동한 후, `node main.js`와 같이 입력해준다.
> 이에 아무런 메시지도 나오지 않는다면 정상적으로 Node.js로 웹 서버를 동작시키고 있는 것이다.

이제 웹 브라우저에 `localhost:3000`을 입력하여 접속하면 Node.js 서버가 미리 준비해두었던 html 파일을 보여줄 것이다.

## 4. 웹 서버 끄기

실행 중인 cmd 창에서 `[Ctrl]+[C]`를 누르면 웹 서버 작동이 멈춘다.

이제 다시 `localhost:3000`로 접속해보면 더 이상 접속이 불가능한 것을 확인할 수 있다.

## 요청한 파일 경로 출력하기

```javascript 
console.log()
```

와 같은 코드는 현재 Node.js 서버를 동작시키고 있는 컴퓨터 콘솔창에 괄호 안 내용을 출력시켜주는 함수이다.

즉, 요청한 파일 경로를 출력하기 위해서는 다음과 같이 코드를 작성해주면 된다.

```javascript
console.log(__dirname + url);
```

## 웹 서버의 응답 코드

`main.js`내의 코드 중 다음 코드는 어떤 의미일까?

```javascript
response.end(fs.readFileSync(__dirname + url));
```

`response.end()`는 웹 서버가 **웹 브라우저의 요청에 응답하는 명령**이다.
- 괄호안의 내용을 웹 브라우저에 전달하게 된다.

여기서는 Node.js의 기능 중에서 `fs.readFileSync()`를 이용해서 웹 브라우저가 요청한 파일(__dirname + url)을 읽어서 응답하였다.
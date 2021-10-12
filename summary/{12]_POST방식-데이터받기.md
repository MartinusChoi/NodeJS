# POST 방식으로 전송된 데이터 받기

POST 방식으로 보낸 데이터를 받을 때는 `request.on('data', function{}());`과 `request.on('end', function() {});`를 이용한다.

먼저 < form > 태그의 action 속성을 통해 다음과 같은 주소로 데이터를 보내도록 지정했다고 가정해보자.

```html
<form action="http://localhost:3000/create_process" method="post"></form>
```

그리고 Node.js 애플리케이션 소스코드에서 이 주소에 대한 처리문을 만들어준다.

```javascript
var qs = require('querystring');
...
else if(pathname === '/create_process') {
    var body = '';

    request.on('data', function(data) {
        body = body + data;
    });
    request.on('end', function() {
        var post = qs.parse(body);
        
        // qs 모듈을 이용하여 
        var title = post.title; 
        var description = post.description;

        //...
    });
}

```

post 형식으로 넘어온 데이터는 다음과 같은 형태를 가지고 있다.

```
{title : 'Nodejs', description : 'Nodejs is ...'}
```

이 중에서 `.title`, `.description` 과 같은 형태로 사용할 수 있다.
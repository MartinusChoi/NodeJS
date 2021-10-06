# URL

```
https://www.phpbb.com/community/viewtopic.php?f=14&t=2453376
https://www.phpbb.com/community/viewtopic.php?f=14&t=2111378
```

위 두개의 url 주소에서 확인해보면 t값만 바꿔가면서 다른 페이지를 보여주고 있다는 것을 확인할 수 있다. **즉, 하나의 파일로 여러 개의 동적인 웹 페이지**를 만들어서 보여주고 있는 것이다.
> Node.js 에서도 이렇게 동적인 웹 페이지를 만드는 것이 가능하다.

그 전에 먼저 URL 형식에 대해 좀 더 알아볼 필요가 있다.

---

## URL 형식

> `http`: //`opentutorials.org`:`3000`/`main`?`id=HTML&page=12`

1. `http` ; 프로토콜(protocol) 부분
    - 프로토콜은 사용자가 서버에 접속할 때 **어떤 방식으로 통신할 것인지**를 나타내는 부분이다.
    - HTTP도 통신 규칙 중 하나이다.
2. `opentutorials.org` ; 도메인 네임(domain name) / 호스트(host)
    - host는 인터넷에 접속된 각각의 컴퓨터를 의미한다.
    - 즉, `opentutorials.org`는 어떤 특정한 인터넷에 연결된 컴퓨터를 가리키는 주소이다.
3. `3000` ; 포트(port) 번호
    - 한 대의 컴퓨터 안에 여러 대의 서버가 있을 수 있다.
    - 따라서 접속할 때 포트 번호를 명시하면 **해당 포트로 연결된 서버와 통신**하게 된다.
    - 따라서 `main.js`에서도 아래와 같이 작성했었다.
    ```javascript
    app.listen(3000);
    ```
4. `main` ; 경로(path)
    - 해당 컴퓨터 안에 있는 어떤 디렉터리에서 어떤 파일을 불러올 것인지를 가리킨다.
5. `id=HTML&page=12` ; **쿼리 스트링(query string)**
    - 이를 이용하여 서버에 내가 원하는 데이터가 무엇인지에 대한 내용을 전달할 수 있다.
    - ex) "내가 읽고 싶은 정보는 HTML이고, 12페이지다."

---

## 쿼리 스트링 : "Query String"

쿼리 스트링은 **물음표(`?`)로 시작**하고 **값과 값 사이는 앰퍼샌드 기호(`&`)로 구분**한다. 또한, **이름과 값은 등호(`=`)로 구분**한다.

`?id=HTML&page=12`
> Meaning ; id와 page라는 이름을 가진 두 개의 값을 가지고, 각각의 값은 HTML과 12를 가진다.

---

## URL로 입력된 값 사용하기

### 1. 사용자가 요청한 URL 가져오기

먼저 사용자가 어떤 URL을 요청했는지 Node.js 애플리케이션이 알 수 있어야 한다.

```javascript 
var url = request.url
```

위의 구문에서 `request.url`은 사용자가 요청한 URL을 반환해준다. 즉, 사용자가 요청한 URL을 `url`이라는 변수에 담아서 사용하고 있는 것이다.

### 2. URL에서 **쿼리 스트링** 추출

이제 사용자가 요청한 URL에서 **쿼리 스트링**을 추출해볼 것이다.
> 쿼리 스트링을 추출해야만 웹 서버에서 사용자 요청을 구분해 서로 다른 웹 페이지를 보낼 수 있기 때문이다.

`main.js`에 다음과 같은 구문을 추가해보자.

```javascript
var url = require('url');
```

`require()`함수는 필요한 모듈을 Node.js에게 알려주는 역할을 한다. 즉, 저 구문으로 우리는 **"url이라는 모듈이 필요하다고 Node.js에게 요구"**한 것이다.
> 이렇게 함으로써 우리는 Node.js url 모듈에 담긴 기능을 사용할 수 있다. 다른 모듈의 경우에도 같은 방식으로 불러와 쓸 수 있다.

이제 우리는 쿼리 스트링을 추출하기 위해 아래와 같이 구문을 추가할 것이다.
```javascript
var queryData = url.parse(_url, true).query
```
위와 같이 url모듈의 parse() 기능을 사용하여 구문을 작성하면 그 반환값으로 쿼리 스트링을 추출해 객체로 반환하게 된다.
> `?id=HTML`이라는 쿼리 스트링을 `{id: 'HTML'}`과 같이 객체로 반환한다.

따라서 다음과 같이 작성하면 쿼리 스트링의 특정 값만을 불러와서 쓸 수 있다.

```javascript
var id = queryData.id
```

이때, 쿼리 스트링에서의 값 이름과 소스코드에서 사용하는 값의 이름을 동일하게만 적용하면 어떠한 이름으로 적용해도 똑같다.
> 즉, `?id=HTML`->`queryData.id`->`{id: 'HTML'}`과 `?name=HTML`->`queryData.name`->`{name: 'HTML'}` 과 같이 값의 이름과 상관없이 일치만 시켜주면 잘 작동한다.
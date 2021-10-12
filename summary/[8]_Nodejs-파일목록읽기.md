# 파일 목록을 읽어서 동적으로 Web Page 생성하기

## 1. **디렉터리에서 파일 목록을 읽어오기**

파일 목록을 불러오는 작업은 **fs 모듈의 `readdir()` 함수**를 사용한다.

```javascript
var fs = require('fs');

fs.readdir(`data/${queryData.id}`, function(error, fileList) {
    console.log(fileList);
});
```

위와 같이
- 첫 번째 인자로 `읽어올 디렉터리의 경로`,
- 두 번째 인자로 `callback 함수`

를 넘겨주어 callback 함수 내에서 파일 목록을 불러온 후 처리할 내용을 수행한다.

## 2. **동적으로 web page 구성하기**

전체적인 수행 과정은 다음과 같다.

```
1. 디렉터리에서 `파일 목록` 읽어오기
2. 읽어온 파일 목록을 표시하는 `HTML 코드 list 변수에 저장`하기
3. 저장한 변수를 이용해 web page에 표시하기
```

### 2-1. 파일 목록 읽어오기

``` javascript
...
if(queryData.id === undefined) {
    fs.readdir(`./data`, function(error, fileList) {
        // 파일 목록을 가져온 다음에 실행할 코드
    });
}
...
```

### 2-2. HTML 코드 list 변수에 저장하기

```javascript
var list = '<ul>';

var i = 0;
while(i < fileList.length) {
    list = list + `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
    i = i + 1;
}

list = list + '</ul>';
```

위와 같이 파일 목록에서 읽어온 이름대로 하나씩 링크를 만들어 list를 구성하는 HTML 코드를 구성하고 이를 변수에 저장한다.
> 이때, 앞서 공부한 '템플릿 리터럴'을 이용한다.

## 2-3. Web page에 구성하기

```javascript
${list}
```

위와 같은 형태로 HTML template 코드 중간에 넣어준다.
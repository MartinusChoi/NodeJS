# Node.js에서 파일 읽기

Node.js에서 파일을 읽어오기 위해서는 Node.js의 모듈 중 하나인 `fs` 모듈을 사용해야 한다.

```javascript
var fs = require('fs');
```

먼저 위와 같이 `require()` 기능을 사용하여 **'fs 모듈을 사용하겠다'** 는 것을 알린다.
> python에서의 `import` 구문과 비슷하다.

이제 아래와 같이 fs 모듈에서 `readFile()` 기능을 사용하여 파일을 읽어온다.

```javascript
fs.readFile('sample.txt', 'utf8', function(err, data) {
    console.log(data);
});
```

## `fs.readFile()`

- 1st parameter ('smaple.txt') : 읽어올 **파일의 경로**
- 2nd parameter ('utf8') : **'utf8'** 형으로 파일을 읽어올 수 있도록 지정합니다.
- 3rd parameter ('function(err, data) {}') : 파일을 읽어오는 작업이 완료되었을 때 자동으로 실행되는 **callback 함수** 
    - err : 파일을 읽어오는 과정에서 error가 발생하면 해당 내용을 이 변수에 담아준다.
    - data : 파일에서 읽어온 정보를 이 변수에 담아준다.
    - 비동기 함수 이므로 callback 함수를 정의하여 사용한다.
        - 동기와 비동기에 대한 내용은 나중에 따로 정리.
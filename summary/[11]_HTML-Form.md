# HTML-Form

사용자가 서버 쪽으로 데이터를 전송하는 방식이다.

---

데이터를 입력받을 때는 `<input>` 태그를 사용한다.
> 이때 텍스트를 입력받으려면 `type` 속성값을 'text'로 지정한다.

여러 줄의 데이터를 입력받고자 할 때는 `<textarea>` 태그를 사용한다.

```html
<p><input type="text"></p>
<p>
    <textarea></textarea>
</p>
```

입력이 끝난 이후에는 입력이 끝났다는 의미로 전송을 해야하는데, 그러려며 `전송 버튼`이 필요하다. 

```html
<p><input type="text"></p>
<p>
    <textarea></textarea>
</p>
<p>
    <input type="submit">
</p>
```

사용자가 입력한 데이터를 수신할 주소를 지정할 필요가 있다.
> 그러기 위해서는 사용자로부터 입력받는 양식을 `<form>` 태그로 감싸야 한다.

```html
<form action="http://localhost:3000/process_create">
    <p><input type="text"></p>
    <p>
        <textarea></textarea>
    </p>
    <p>
        <input type="submit">
    </p>
</form>
```

`action` 속성에 데이터를 전송할 주소를 입력한다.

사용자가 입력한 양식을 웹 서버가 수신해서 용도에 맞게 처리하기 위해서는 **각 데이터에 이름**이 있어야 한다.
> `name` 속성을 이용해 이름을 붙일 수 있다.

```html
<form action="http://localhost:3000/process_create">
    <p><input type="text" name="title"></p>
    <p>
        <textarea name="description"></textarea>
    </p>
    <p>
        <input type="submit">
    </p>
</form>
```

이때, form 태그는 입력한 정보를 **쿼리 스트링으로 만들어서 action 속성이 가리키는 서버로 전송한다.**

하지만 이렇게 되면 자칫 정보가 외부로 유출될 가능성이 높아 위험하고 많은 내용을 보낼 수 없다.
> 눈에 보이지 않고 안전하게 보내기 위해서는 <form> 태그의 `method` 속성을 `post`로 지정하면 된다.

```html
<form action="http://localhost:3000/process_create" method="post">
    <p><input type="text" name="title"></p>
    <p>
        <textarea name="description"></textarea>
    </p>
    <p>
        <input type="submit">
    </p>
</form>
```

이런식으로 method를 post로 지정하지 않으면 쿼리스트링으로 만들어 정보를 보내는 get 방식을 사용하게 되어 위험하다.
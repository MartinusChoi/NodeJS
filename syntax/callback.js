var a = function () { // slowfuc의 callback 함수이다.
    console.log('A');
}

function slowfunc(callback) { // slowFunc 실행 후 실행할 callback 함수를 인자로 받는다.
    callback();
}

slowfunc(a); // callback 함수를 전달하여 호출한다.
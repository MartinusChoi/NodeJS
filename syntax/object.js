// python의 dictionary 와 비슷하다고 볼 수 있다.
var roles = {
    'programmer' : 'egoing',
    'designer' : 'k8805',
    'manager' : 'hoya'
}

// 두가지 방법으로 객체에서 값을 가져올 수 있다.
console.log(roles.designer);
console.log(roles['designer']);

// python for문 사용과 비슷
for(var name in roles) { // key 값을 가져온다.
    console.log('object =>', name, 'value => ', roles[name]);
}
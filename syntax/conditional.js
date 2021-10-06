var args = process.argv; // 프로그램을 실행할 때 함께 넝어온 입력값을 args라는 변수에 저장한다는 의미
// 3가지 정보가 출력된다.
// 1. 런타임이 위치한 경로
// 2. 실행한 파일이 위치한 경로
// 3. 프로그램을 실행할 때 입력한 값 (공백을 기준으로 구분하여 값을 여러개 넘길 수 있다.)
console.log(args[2]);

console.log('A');
console.log('B');
if(args[2] === '1') {
    console.log('C1');
}
else {
    console.log('C2');
}
console.log('D');
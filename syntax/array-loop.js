var number1 = [1, 400, 12, 34, 5];
var number2 = [1, 400, 12, 34, 5, 10000];
var number3 = [1, 400, 12, 34];

console.log('Original array state');

var i = 0;

while(i < 5) {
    console.log(number1[i]);
    i = i + 1;
}

console.log('append 10000 at the end of array');

var i = 0;

while(i < 5) {
    console.log(number2[i]);
    i = i + 1;
}

console.log('remove 4 at the end of array');

var i = 0;

while(i < 5) {
    console.log(number3[i]);
    i = i + 1;
}

console.log('handle loop epoch to match with array length');

var i = 0;

while(i < number2.length) {
    console.log(number2[i]);
    i = i + 1;
}

var i = 0;

while(i < number3.length) {
    console.log(number3[i]);
    i = i + 1;
}
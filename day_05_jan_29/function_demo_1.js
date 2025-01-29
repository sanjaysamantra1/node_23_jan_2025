// 1. Function Declaration (Named)
add(10, 20);
function add(a, b) {
    console.log(`addition of ${a} & ${b} is ${a + b}`)
}

// 2. Function Expression (anonymous)
var sub = function (a, b) {
    console.log(`subtraction of ${a} & ${b} is ${a - b}`)
}
sub(20, 10);

// 3. Self Invoked / IIFE - Immediately invoked function Expression
(function (a, b) {
    console.log(`multiplication of ${a} & ${b} is ${a * b}`)
})(10, 20);

// 4. Arrow Function (ES-6) 2015
var division = (a, b) => {
    console.log(`division of ${a} & ${b} is ${a / b}`)
}
division(20, 10);
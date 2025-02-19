console.log('this value at top level:', this);
module.exports.name = "sanjay";
console.log('this value at top level:', this);

function f1() {
    console.log('this value inside regular function:', this); // this = global
}
f1();

let f2 = () => {
    console.log('this value inside regular function:', this); // this = module.exports
}
f2();

function f3(){
    'use strict'
    console.log('this value in strict mode:', this);
}
f3()
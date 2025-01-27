var a = 10;
let b = 20;
const c = 30;
console.log(`a:${a} b:${b} c:${c}`);
a = 15;
b = 25;
// c = 35; // Assignment to constant variable.
console.log(`a:${a} b:${b} c:${c}`);

const name = 'nareshIT';
// name = 'nareshInfoTech';

// const and objects
const obj1 = { x: 100, y: 200 };
obj1.x = 150;  // update property value
delete obj1.y; // delete prop
obj1.z = 300;  // add a new property
console.log(obj1);
// obj1 = { x: 500, y: 600 }; // Assignment to constant variable

// declaring arrays using const
const cars = ['tata','honda'];
cars.push('maruti');  // yes
console.log(cars);
cars = ['tata','bmw','toyota'];  // no
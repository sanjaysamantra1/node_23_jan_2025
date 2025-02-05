let cars = ['Tata', 'Honda', 'Maruti', 'Hundai'];

console.log('cars length ', cars.length, cars); // 4
delete cars[2]; // maruti gets deleted
console.log('cars length ', cars.length, cars); // 4
console.log('car present at 2 index', cars[2]);
cars[2] = 'Toyota';
console.log('cars length ', cars.length, cars); // 4 ['Tata', 'Honda', 'Toyota', 'Hundai'];

cars.pop();
console.log('after pop ', cars); // ['Tata', 'Honda', 'Toyota']
cars.push('Hundai');
console.log('after push ', cars); // ['Tata', 'Honda', 'Toyota', 'Hundai']

cars.shift();
console.log('after shift ', cars);  // [ 'Honda', 'Toyota', 'Hundai' ]
cars.unshift('Tata');
console.log('after unshift ', cars);  // [ 'Tata','Honda', 'Toyota', 'Hundai' ]

// Array.splice(startInd , deleteCount , elements to insert)
cars.splice(1, 2); // only delete
console.log('after splice ', cars);  // [ 'Tata', 'Hundai' ]
cars.splice(1, 0, 'Honda', 'Toyota'); // only insert
console.log('after splice ', cars);  // [ 'Tata','Honda', 'Toyota', 'Hundai' ]
cars.splice(1, 2, 'Maruti'); // both delete and insert
console.log('after splice ', cars); // [ 'Tata','Maruti', 'Hundai' ]

let cars2 = cars.toSpliced(1, 2);
console.log(cars, cars2);

let arr1 = [10, 20, 30, 40];
let arr2 = arr1.with(2,35);
console.log(arr1 , arr2); // [10, 20, 30, 40]    [10, 20, 35, 40]
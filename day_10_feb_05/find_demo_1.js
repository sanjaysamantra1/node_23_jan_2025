let cars = ['Tata', 'Honda', 'Maruti', 'Hundai'];

console.log(cars[1]); // Honda
console.log(cars.at(1)); // Honda

console.log(cars[-1]); // undefined
console.log(cars.at(-1)); // Hundai
// Note : at() works with -ve index

console.log(cars.includes('Tata')); // true
console.log(cars.includes('BMW')); // false
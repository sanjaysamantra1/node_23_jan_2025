let cars = ['Tata', 'Honda', 'Maruti', 'Hundai'];

// 1. loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}
console.log('=========================');

// 2. fon-in
for (ind in cars) {
    console.log(cars[ind]);
}
console.log('=========================');

// 3. for-of
for (car of cars) {
    console.log(car);
}
console.log('=========================');

// 4. forEach(callback)  forEach is a higherOrder Function, it takes a callback function as argument
function printCar(a,b,c) {
    console.log(a,b,c)
}
cars.forEach(printCar); // forEach : HigherOrder , printCar: callback
console.log('=========================');

cars.forEach((val)=>console.log(val));

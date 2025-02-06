let cars = ['Tata', 'Honda', 'Maruti'];

cars.sort();
console.log(cars); // ['Honda','Maruti','Tata']

cars.reverse()
console.log(cars); // [ 'Tata', 'Maruti', 'Honda' ]

let numArr = [10, 50, 20, 40, 30];
numArr.sort();
console.log(numArr);

let numArr2 = [10, 103, 105, 9, 7, 92, 95, 91, 8];
numArr2.sort();    // these values are being sorted as if they are strings
console.log(numArr2);
numArr2.sort((a, b) => a - b); // Ascending
console.log(numArr2)
numArr2.sort((a, b) => b - a); // Descending
console.log(numArr2)

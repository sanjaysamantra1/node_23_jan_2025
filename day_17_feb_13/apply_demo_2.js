console.log(Math.max(10, 20, 50, 30, 40)); // 50

let arr = [10, 20, 30, 40, 50];
console.log(Math.max(arr)); // NaN

console.log(Math.max.apply({}, arr)); // 50

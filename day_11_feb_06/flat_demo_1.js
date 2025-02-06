let arr = [10, 20, [30, 40, [50, 60, [70, 80, [90, 100]]]]];
console.log(arr.length);

let res1 = arr.flat();
console.log(res1 , res1.length);

let res2 = arr.flat(2);  // depth = 2
console.log(res2 , res2.length);

let res3 = arr.flat(Infinity);  // depth = n
console.log(res3 , res3.length);
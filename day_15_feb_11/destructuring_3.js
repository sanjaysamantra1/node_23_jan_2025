// Array De-structuring
let arr = [10, 20, 30, 40, 50];
let a = arr[0];
let b = arr[1]; // es-5
let c = arr[2];
console.log(a, b, c);

let [p, q, r, s, t, u] = arr;
console.log(p, q, r, s, t, u);

let arr2 = [10, 20, [30, 40]];
let [v1, v2, [v3, v4]] = arr2;
console.log(v1, v2, v3, v4);
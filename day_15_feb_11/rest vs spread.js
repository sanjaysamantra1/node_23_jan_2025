// REST Parameter - when ... is used as function parameter
function test(a, b, ...c) { 
    console.log(a, b, c);
} 
test(2,3,4,5,6);    //  2  3  [4,5,6]


let arr1 = [10,20,50,40,30];
let arr2 = [...arr1]; // spread opertaor

console.log(Math.max(10,20,50,40,30)); // 50
console.log(Math.max(arr1)); // NaN
console.log(Math.max(...arr1)); // 50
// Spread - Breaks an array to individual values

let arr1 = [10, 20];
let arr2 = arr1;   // Reference Copy / Address Copy
// A new array is not being created, the same address is shared with both arr1 , arr2
// 2 variables holding the address of the same array
arr1.push(30);
arr2.push(40);
console.log(`arr1- ${arr1}`);  // [10,20,30,40]
console.log(`arr2- ${arr2}`);  // [10,20,30,40]

let arr3 = [10, 20, [30, 31]];
let arr4 = [...arr3]; // spread - value copy - shallow copy
// only 1st level values are copied by value, nested items are copied by reference
arr3.push(40);
arr3[2].push(32, 33);
arr4.push(50);
console.log(`arr3- ${arr3}`);  // [10,20,[30,31,32,33],40]
console.log(`arr4- ${arr4}`);  // [10, 20, [30,31,32,33], 50]

let arr5 = [10, 20, [30, 31]];
let arr6 = structuredClone(arr5); // value copy - Deep Copy
arr5.push(40);
arr5[2].push(32, 33);
arr6.push(50);
console.log(`arr5- ${arr5}`);   // [10,20,[30,31,32,33],40]
console.log(`arr6- ${arr6}`);   // [10,20,[30,31],50]


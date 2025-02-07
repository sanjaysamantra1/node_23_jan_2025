const arr1 = [10, 20];

arr1[0] = 15;  // yes
delete arr1[1]; // yes
arr1.push(30); // Yes
console.log(arr1); // [15,,30]

arr1 = [100, 200]; // assign a new array - no 
// TypeError: Assignment to constant

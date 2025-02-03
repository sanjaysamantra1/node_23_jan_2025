let str1 = 'hello';
let str2 = 'hello';  // String Literals

let str3 = new String('hello');  // String Objects
let str4 = new String('hello');

console.log(typeof str1); // string
console.log(typeof str3); // Object

console.log('str1 & str2 are same? ', str1 == str2); // true
console.log('str2 & str3 are same? ', str2 == str3); // true (typecasting)
console.log('str3 & str4 are same? ', str3 == str4); // false
// Note : when 2 objects are compared, its reference comparision and not value comparision
console.log({} == {}); // false : reference comparision
console.log([10, 20] == [10, 20]); // false : reference comparision

let str5 = '2+3+4';
console.log(eval(str5)); // evaluates to 9
let str6 = new String('2+3+4');
console.log(eval(str6)); // wont be able to evaluate, str6 is a string object

// convert string object to string literal
let str7 = str6.valueOf();
console.log(eval(str7)); // evaluates to 9
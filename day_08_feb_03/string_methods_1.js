let str1 = 'hello';
console.log('String length: ', str1.length);

console.log('String in uppercase: ', str1.toUpperCase());
console.log('String lowercase: ', str1.toLowerCase());

console.log('char At index 2: ', str1.charAt(2)); // l
console.log('char At index 2: ', str1.at(2)); // l
console.log('char code At index 1: ', str1.charCodeAt(1)); // 101 (A-65  , a-97 , e-101)

console.log('char At index -1: ', str1.charAt(-1)); // charAt() doesn't work with -ve index
console.log('char At index -1: ', str1.at(-1)); // 0

let str3 = 'sachin';
let str4 = ' tendulkar';
let str5 = str3.concat(str4);
console.log(str5)

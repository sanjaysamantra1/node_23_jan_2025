let str1 = 'This is javascript class';

console.log(str1.slice(8, 12)); // java
console.log(str1.slice(8)); // javascript class
console.log(str1.slice(8,-5)); // javascript 
console.log('==============')
console.log(str1.substring(8, 12)); // java
console.log(str1.substring(8)); // javascript class
console.log(str1.substring(8,-5)); // This is
// Note:  substring() doesn't work with -ve index
console.log('==============')
console.log(str1.substring(5,13)); // is javas  (index-5 , index-13)
console.log(str1.substr(5,13)); // is javascript (index-5 , how many characters)
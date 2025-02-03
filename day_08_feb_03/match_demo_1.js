let str1 = 'rain in spAin stays mainly in the plain';

let res1 = str1.match(/ain/);
console.log(res1);

let res2 = str1.match(/ain/g);
console.log(res2);

let res3 = str1.match(/ain/gi);
console.log(res3);

let str2 = 'ram and hari are 2 friends, ram is 15 years and hari is 16 years old';
let res4 = str2.match(/[0-9]{1,2}/g);
console.log(res4)


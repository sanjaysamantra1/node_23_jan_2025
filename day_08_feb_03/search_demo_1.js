let str = 'ram and hari are 2 friends, ram is 15 years and hari is 16 years old';

// Q. at what index the first numeric value is present
// first numeric value is 2, its present at 17 index
console.log(str.indexOf('2')); // 17
console.log(str.search(/[0-9]/)); // 17

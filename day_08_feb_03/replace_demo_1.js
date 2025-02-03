let str1 = 'good Morning';

let res1 = str1.replace('g','h');
console.log(res1)

let res2 = str1.replaceAll('g','h');
console.log(res2)

let res3 = str1.replace(/g/g,'h'); // replaceAll using replace() and REGEX
console.log(res3)


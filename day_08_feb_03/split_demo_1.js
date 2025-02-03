let str1 = 'This is javascript class';

let res1 = str1.split('');
console.log(res1);  // ['t','h','i' ,......]

let res2 = str1.split(' '); // n+1 elements
console.log(res2);  // [ 'This', 'is', 'Javascript', 'class' ]

let res3 = str1.split('java');
console.log(res3); // [ 'This is ', 'script class' ]

let res4 = str1.split('python');
console.log(res4); // [ 'This is javascript class' ]

let res5 = str1.split('This'); // n+1
console.log(res5); // [ '' , ' is javascript class' ]

let res6 = str1.split('class'); // n+1
console.log(res6); // [ 'this is javascript ','' ]
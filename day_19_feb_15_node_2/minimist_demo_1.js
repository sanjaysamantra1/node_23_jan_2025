const minimist = require('minimist');
const argArr = process.argv.slice(2);
const argObj = minimist(argArr);
console.log(argObj.name , argObj.add)
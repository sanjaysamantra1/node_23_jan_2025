const fs = require('fs');

console.log('program starts here...');
const fileData = fs.readFileSync('./day_19_notes.txt','utf-8'); 
console.log(fileData)
console.log('program ends here...');
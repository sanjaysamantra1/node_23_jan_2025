const fs = require('fs');

console.log('program starts here...');

fs.readFile('./day_19_notes.txt', 'utf-8', (err, fileData) => {
    console.log(fileData)
}); // 1sec

console.log('program ends here...');
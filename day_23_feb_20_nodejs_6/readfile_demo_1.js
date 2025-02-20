const fs = require('fs');

console.log('Program starts');

// Read File Synchronously
/* const file1Content = fs.readFileSync('./file1.txt', 'utf8');
console.log(file1Content); */

// Read File ASynchronously
fs.readFile('./file1.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('something went wrong',err);
    }
    console.log(data)
});
console.log('Program ends');
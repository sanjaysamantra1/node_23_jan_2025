const fs = require('fs');

// Synchronous
/* let data1 = fs.readFileSync('file1.txt', 'utf8');
let data2 = fs.readFileSync('file2.txt', 'utf8');
fs.writeFileSync('file3.txt', `${data1}\n${data2}`); */

//Async
fs.readFile('file1.txt', 'utf8', (err, data1) => {
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
        fs.writeFile('file3.txt', `${data1}\n${data2}`, () => {
            console.log('succesful')
        });
    });
});

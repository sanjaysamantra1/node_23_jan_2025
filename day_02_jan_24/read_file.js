const fs = require('fs'); // importing fs module from nodejs

fs.readFile('./day_2_notes.txt', (err, data) => {
    console.log(data.toString());
}); 
// this code will work only in nodejs and not in browser
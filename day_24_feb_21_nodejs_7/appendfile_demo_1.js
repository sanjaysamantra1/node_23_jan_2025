const fs = require('fs');

fs.appendFile('../data/file1.txt', `\n Hello!!!, Good Afternoon`,  () => {
    console.log('Successful')
});
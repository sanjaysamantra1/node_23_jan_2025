const fs = require('fs');

// Read File Asynchronously
fs.writeFile('./file2.txt', 'Hiiiiiii , This is File-2 Content',()=>{
    console.log('data written succesfully')
});

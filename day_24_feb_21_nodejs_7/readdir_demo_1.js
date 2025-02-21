const fs = require('fs');

fs.readdir('./', (err, files) => {
    console.log('Successful', files)
});

// rename
fs.rename('../data/file1.txt','../data/file2.txt', (err) => {
    console.log('Rename Successful');
});

// delete
fs.unlink('../data/file2.txt', (err) => {
    if(err){
        console.log(err)
    }
    console.log('deleted Successfully');
});
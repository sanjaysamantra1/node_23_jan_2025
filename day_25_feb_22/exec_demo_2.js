const { exec } = require('child_process');
const { writeFile } = require('fs');

exec('dir',(error,stdout,stderr)=>{
    if(error){ // if the command is not found
        console.log('something is not correct',error.message);
        return
    }
    if(stderr){ // error while executing the command
        console.log(stderr)
    }
    writeFile('abc.txt',stdout,()=>{
        console.log('data written succesfully')
    })
})
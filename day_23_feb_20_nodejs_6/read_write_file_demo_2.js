const fs = require('fs').promises;

async function ReadData() {
    let [data1, data2] = await Promise.all([
        fs.readFile('file1.txt', 'utf8'),
        fs.readFile('file2.txt', 'utf8')
    ]);
    fs.writeFile('file3.txt', `${data1}\n${data2}`).then((res)=>{
        console.log('successful')
    })
   
}
ReadData();
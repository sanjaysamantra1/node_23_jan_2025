const express = require('express');
const fs = require('fs');
const {formidable} = require('formidable');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h2>With Node.js <code>"http"</code> module</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="myFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
    `)
})

app.post('/api/upload', async(req, res) => {
    const form = formidable({});
    let fields;
    let files;
    try {
        [fields, files] = await form.parse(req);
    } catch (err) {
        res.end(String(err));
        return;
    }
    for (let file of files.myFiles) {
        let oldPath = file.filepath;
        let newPath = `${__dirname}/assets/${file.originalFilename}`;
        let imageFile = fs.readFileSync(oldPath);
        fs.writeFileSync(newPath, imageFile);
        res.end('Files Uploaded Succesfully!!!')
    }
});
app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});

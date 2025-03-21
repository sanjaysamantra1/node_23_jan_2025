const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
app.use(fileUpload()); //fileUpload middleware
app.get('/', (req, res) => {
    res.send(`
        <form id='uploadForm' method='post' action='http://localhost:5000/upload' 
            encType="multipart/form-data">
            <input type='file' name='myFiles' multiple />
            <input type='submit' value='upload' />
        </form>
    `)
})
app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No Files Uploaded!!');
    }
    // myFiles is the name of inputfield in the form
    let myFiles = req.files.myFiles;
    let uploadPath = `${__dirname}/assets/${myFiles.name}`;
    myFiles.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(`${myFiles.name} uploaded successfully!!!`);
    })
});
app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});

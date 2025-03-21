const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

//use fileUpload middleware
app.use(fileUpload());

app.get('/', (req, res) => {
    res.send(`
        <form id='uploadForm' method='post' action='http://localhost:5000/upload' 
            encType="multipart/form-data">
            <input type='file' name='sampleFile' multiple />
            <input type='submit' value='upload' />
        </form>
    `)
})

app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No Files Uploaded!!');
    }
    // sampleFile is the name of inputfield in the form
    let sampleFile = req.files.sampleFile;
    let uploadPath = `${__dirname}/assets/${sampleFile.name}`;

    // use mv() to place the file
    sampleFile.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(`${sampleFile.name} uploaded successfully!!!`);
    })
});

app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});

const express = require('express');
const path = require('path');
const app = express();

app.get('/viewImage', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../data/node.png'))
})
app.get('/downloadImage', (req, res) => {
    res.download(path.resolve(__dirname,'../data/node.png'))
})

app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});

const express = require('express');
const app = express();

app.get('/employees', (req, res) => {
    res.send('This is Employees page')
});
app.use('/users', (req, res) => {
    res.send('This is Users page')
});

app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});

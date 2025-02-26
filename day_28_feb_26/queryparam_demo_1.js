const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    let { name, age, add } = req.query;
    res.send(`${name} is ${age} Years old, ${name} is From ${add}`)
});

app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});

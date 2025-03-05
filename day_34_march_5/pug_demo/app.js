const express = require('express');
const app = express();

const users = ['Adarsh', 'Priyanka', 'Ajay', 'Pavan', 'Teja']

// set view & view-engine
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/users', (req, res) => {
    res.render('users', { users });
});

app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});

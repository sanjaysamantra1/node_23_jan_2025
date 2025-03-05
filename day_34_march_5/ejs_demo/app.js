const express = require('express');
const app = express();

const users = ['Adarsh', 'Priyanka', 'Ajay', 'Pavan', 'Teja']

// set view & view-engine
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/home.ejs');
});
app.get('/about', (req, res) => {
    res.render('pages/about.ejs', { users });
});
app.get('/careers', (req, res) => {
    res.render('pages/careers.ejs', { users });
});
app.get('/products', (req, res) => {
    res.render('pages/products.ejs', { users });
});

app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});

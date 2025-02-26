const express = require('express');
const prductsData = require('../data/products_1.json');
const app = express();
app.use(express.json()); // express.json() middleware 

app.get('/products', (req, res) => {
    res.json(prductsData.products);
});
app.get('/products/:id', (req, res) => {
    let product = prductsData.products.find(prod=>prod.id==req.params.id);
    res.json(product);
});
app.get('/products/:prodId/reviews', (req, res) => {
    let product = prductsData.products.find(prod=>prod.id==req.params.prodId);
    res.json(product.reviews);
});
app.get('/products/:prodId/reviews/:reviewId', (req, res) => {
    let product = prductsData.products.find(prod=>prod.id==req.params.prodId);
    let reviewObj = product.reviews.find(review=>review.rating == req.params.reviewId);
    res.json(reviewObj);
});
app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});

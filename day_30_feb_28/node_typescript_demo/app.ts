const express = require('express');
const userRouter = require('./routes/user_routes');
const app = express();
app.use(express.json());

app.use('/users',userRouter);
// app.get('/products',productRouter);


app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});

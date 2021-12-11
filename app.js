
const express = require('express');
const app = express();
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

app.get('/', (req,res,next) => {res.end('at home\n navigate to\n /products or /users');})
app.use('/products', productRouter);
app.use('/users', userRouter);

app.use((err,req,res,next) => {
    res.status(404).end();
});



app.listen(3200, () => {console.log("listening at port 3200");});





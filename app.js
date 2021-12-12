
const express = require('express');
const app = express();
const path = require('path');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

app.use(express.urlencoded({
    extended: true
}));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('/', (req,res,next) => {res.sendFile(path.join(__dirname, 'views', 'home.html'));})
app.use('/products', productRouter);
app.use('/users', userRouter);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views','notFound.html'));
})

app.use((err,req,res,next) => {
    res.status(500).end("An Error Ocurred!");
});


app.listen(3200, () => {console.log("listening at port 3200");});




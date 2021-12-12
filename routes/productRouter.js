const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req,res,next) => {
    res.status(200).end("In Products");
})
router.post('/add', (req, res, next) => {
     console.log(req.body);
     console.log(req.body.unitPrice);
     res.status(200).end("product added");

});

router.get('/add', (req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views','add_product.html'));
});

module.exports = router;
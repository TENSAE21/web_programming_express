const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req,res,next) => {
    res.status(200).end('In User try get and post at /add');
});

router.get('/add', (req,res,next) => {
    console.log('in user/add GET');
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'add_user.html'));
});

router.post('/add', (req,res,next) => {
    console.log('in user/add POST');
    console.log(req.body);
    res.status(200).end(`added user`);
});

module.exports = router;
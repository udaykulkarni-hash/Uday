const express = require('express');  //module require npm
// const externalModule = require('./logger')  // export logger file

const welcome = require('./logger')
const router = express.Router();


router.get('/test-you', function(req, res){

    res.send("Welcome to function up")
})












router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

router.get('/hello', function (req, res){
   res.send('My Api!')
})

module.exports = router;
// adding this comment for no reason
//jshint esversion:6
const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('home');
});
app.get('/display',(req,res)=>{
    res.render('display');
});
app.get('/add',(req,res)=>{
    res.render('Add');
});
app.get('/register',(req,res)=>{
    res.render('register');
});

app.listen(3000,()=>{
    console.log("server started");
});
//jshint esversion:6
const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('home');
});

app.listen(3000,()=>{
    console.log("server started");
});
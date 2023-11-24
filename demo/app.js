const express = require('express');
// const fs = require('fs');
const app = express();




app.get('/',function (req,res){
    res.sendFile(__dirname+"/index.html");
    // res.send("hello");
})
 
app.post('/contact',function(req,res){
    res.sendFile(__dirname+"/contact.html");
    // res.send("index section");
})

app.get('/about',function(req,res){
    res.sendFile(__dirname+"/about-us.html")
})


app.listen(5000);
var http= require('http');
var sum= require('./demo2');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<b>Hello World</b>');
    res.write('<h1><u>Hello World</u></h1>');
    res.write('<u>Hello World</u><br>'); 
    res.write(req.url);
    res.write('sum'+ sum(20,60));  
    res.end();
}).listen(2100)


// var sum=require('./demo2')
// console.log(sum(20,60));


// var a,b,c;
// a=10;
// b=20;
// c=40;

// console.log(a+b+c);


// let num1=400;
// let num2=300;

// function sum(){
//     return num1+num2;
// }
// console.log(sum());



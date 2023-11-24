var http = require('http');

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<label><b>Name</b><label>: ' + "<input type='text' name='text'> <br><br>");
    res.write('<label><b>Email</b><label>: ' + "<input type='mail' name='text'> <br><br>");
    res.write('<label><b>Contact</b><label>: '+ "<input type='number' name='Number'> <br><br>");
    res.write('<label><b>Password</b><label>: '+ "<input type='Password'> <br>");
    res.end();
}).listen(4100)
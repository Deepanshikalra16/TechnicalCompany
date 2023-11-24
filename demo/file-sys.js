var http= require('http');
var fs= require('fs');
http.createServer(function(req,res){

    fs.appendFile('myfile.txt','Hello!', function(err){
        if(err) throw err;
        console.log('saved');
    });

    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
        
    })
    
    fs.open('myfile1.txt','w', function(err,file){
        if(err) throw err;
        console.log('saved');
    })

    fs.writeFile('myfile1 .txt','Deepi',function(err){
        if(err) throw err;
        console.group('saved');
    })
}).listen(5221);
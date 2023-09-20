//request - response => server
'use strict';


var http = require('http'); // node modules http, os, fs,
var fs = require('fs');

var server = http.createServer((req,res)=>{
    //console.log(req.url);

    
    if(req.url=='/'){
        fs.readFile('page/index.html',(err,html) => {
            if (err) throw err;
            res.write(html);  
            res.end();
        });
    }
     else if(req.url=='/products'){
        fs.readFile('page/urunler.html',(err,html) => {
            if (err) throw err;
            res.write(html);  
            res.end();
        });
    }
    else
    {
        fs.readFile('page/404.html',(err,html) => {
            if (err) throw err;
            res.write(html);  
            res.end();
        });
    }
});

server.listen(3000,()=>{
    console.log('nodejs 3000 port altında çalıştı');
});





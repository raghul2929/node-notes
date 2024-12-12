const http = require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("<h1>This is my Home Page</h1>");
    }
    else if(req.url==='/home'){
        res.end("<h1>This is my Home Page</h1>");
    }else if(req.url==='/about'){
        res.end("<h1>This is my about Page</h1>");
    }else if(req.url==='/contact'){
        res.end("<h1>This is my contact Page</h1>");
    }else{
        res.end('<h1>404 Error, Not Found</h1>');
    }
})
server.listen(5000,err=>{
    if(err) throw err;
    console.log("server listening on port 5000")
})
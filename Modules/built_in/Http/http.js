//? HTTP:
// Hypertext Transfer Protocol
// It is a protocol that allows you to communicate between a server and a client.
// It is a stateless protocol
// stateless means that the server treats every request as a new request i.e., It will not store the previous request in memory.
// Http is a built in module.
// It means no need to install it separately.
// Simply we can import it and we can use it.
//  It is used to create a server in nodejs.

const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello Nodejs')
})

server.listen(5000,err=>{
    if(err) throw err;
   console.log("Server is running on 5000  port") 
})
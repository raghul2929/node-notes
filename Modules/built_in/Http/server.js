//? how to serve html file with callback
const http = require('http');
const fs=require("fs");
// const server=http.createServer((req,res)=>{
//     fs.readFile('./data.htm',(err,data)=>{
//         if(err){
//             console.log(err);
//             res.end()
//         }
//         else{
//             res.writeHead(200,{'Content-Type':'text/html'})
//             res.end(data)
//         }
// })})
// server.listen(5000,err=>{
//     if(err) throw err;
//     console.log("server listening on port 5000")
// })

//? how to serve css file using Streams
// const server=http.createServer((req,res)=>{
//     const data=fs.createReadStream('./data.css')
//         res.writeHead( 200,{'Content-Type':'text/css'})
//         data.pipe(res);
// })
// server.listen(5000,err=>{
//     if(err) throw err;
//     console.log("server listening on port 5000")
// })

//?Json file
// const server=http.createServer((req,res)=>{
//     const data=fs.createReadStream('./data.json')
//         res.writeHead( 200,{'Content-Type':'application/json'})
//         data.pipe(res);
// })
// server.listen(5000,err=>{
//     if(err) throw err;
//     console.log("server listening on port 5000")
// })
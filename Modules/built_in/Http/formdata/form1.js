const http = require('http')
const fs=require('fs')
const mongodb=require('mongodb').MongoClient;
const url="mongodb://localhost:27017";
const querystring = require('querystring')
const server=http.createServer((req,res)=>{
        if(req.method==='POST'){
            let formUrlEncoded='application/x-www-form-urlencoded'
            if(req.headers['content-type']===formUrlEncoded){
                let body="";
                req.on('data',chunk=>{
                    body+=chunk.toString();
                })
                req.on('end',()=>{
                    console.log(body)
                    let payload=querystring.parse(body)
                    let connectDb=async()=>{
                        let connection= await mongodb.connect(url)
                        let database= await connection.db('Node_2pm')
                        let collection= await database.createCollection('Node_2pm')
                        collection.insertOne(payload)
                        res.writeHead(200,{"content-type":"text/html"})
                        res.end(`<h1>Registration Successfull</h1>`)
                    }
                    connectDb()
                })
            
            }else{
                res.writeHead(400,{"content-type":"text/html"})
                res.end(`<h1>Bad Request</h1>`)
            }
        }
        else{
        if(req.url==='/'){
            res.writeHead(200, {'content-type': 'text/html'})
            let form=fs.createReadStream('./form.html')
            form.pipe(res)
        }else if(req.url==='/home'){
            res.writeHead(200, {'content-type': 'text/html'})
            let form=fs.createReadStream('./form.html')
            form.pipe(res)
        }else if(req.url==='/css'){
            res.writeHead(200, {'content-type': 'text/css'})
            let form=fs.createReadStream('./form.css')
            form.pipe(res)
        }
    }
})
server.listen(3000,err=>{
    if(err) throw err;
    console.log("server is running on port 3000")
})
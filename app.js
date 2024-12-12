
console.log("first")
console.log("third")

const fs=require('fs')
fs.readFileSync('./index.html',(err,data)=>{
    console.log(data.toString())
    console.log("file read successfully")
})

console.log("second")
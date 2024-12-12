//? FS: If we need to interact with the files in our Operating System then will use fs module.

// import fs module
const fs =require('fs')
// console.log(fs)

//? file Operations
//!read a file
//?Syntax: readFileSync('path of file','utf-8')

// let data=fs.readFileSync('./node.txt','utf-8')
// console.log(data)
// console.log("first")

//!write a file
//?Syntax: writeFileSync('filename','data you want to write')
// fs.writeFileSync('./node1.txt','I am text File')
// console.log("write file is successful")
// Note:If file is not present it will create a new file and write the data to it

//!Append a file
//?Syntax: appendFileSync('path of file','data you want to write')
// fs.appendFileSync('./node2.txt','We are Feeling________\n')
// console.log("Data is appended")
// Note:If file is not present it will create a new file and write the data to it

//!read and append data in file
// let data1=fs.readFileSync('./node.txt','utf-8')
// console.log("Reading file is successful")
// fs.appendFileSync('./Nodejs.txt',data1)
// console.log("Data is appended")

//!delete a file
// fs.unlinkSync('./node1.txt')
// console.log("deleted")

//?rename a file
// fs.renameSync('./node.txt','Express.js')
// console.log("file renamed")

//?create a new folder
// fs.mkdirSync('./Nodejs')
// console.log("folder created")

//?create nested folder
// fs.mkdirSync('./Nodejs/node_2pm')
// console.log("folder created")

//?create file inside nested folder
// fs.writeFileSync('./Nodejs/node.js',"node")
// console.log("folder created")

//?remove folder
// fs.rmdirSync('./Nodejs')
// console.log("deleted")

//?rename folder
// fs.renameSync('./nodejs','./Express')
// console.log('renamed')


//? Task 1:
// create Routes folder--->create routes js file
// routes js file---->modules text file


//?Task 2:
// controller--->controller js file
// views---->views js file
// model--->model js file
// node--->node js file---->Node.js is an open source server environment. Node.js allows you to run JavaScript on the server. Start learning Node.js now


// Nodejs--->Express--->JavaScript--->Data--->data.js(append data of Node.js file here)


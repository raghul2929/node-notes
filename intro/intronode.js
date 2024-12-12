// 1)what is node?
// Node.js is a open source cross platform run time enviornment to execute the js files outside the browser.
// Node.js can be performed operations on both client side and server side.
//2009-ryan dhal

// 2) Why we need Node.js?
//  we can perform both client side and server side programming.
//  with the help of node.js we can create our own server
//  To build cross platform applications
//  Loading time is less
//  We can create real time web applications

// 3) why node.js is single threaded
//  Node.js is single threaded by default asynchronous
// minimizes memory usage and allows Node.js to efficiently manage high numbers of concurrent connections, 
// making it ideal for I/O-heavy applications like
// web servers..

// 5) What is NPM?
//  NPM stands for Node package Manager which is present inside Node
//  It is the largest Open source software library and free to use.
//around 8 +lacks og packages
//  Install, update, and manage JavaScript libraries and packages.
// 6 what is npx
//  node package excuter
//used to excute the package

// 7)What are modules?
// Module is a block of code which can be reuseable
//module is an object
//we can break the complex code into small pieces
// TYPES: Local modules,Third party modules,built-in modules

//8)why we need modules?
// we can reuse the code for n no of times 
// And modules helps the developers form Dry principle
// can be break the code into simple and managable

//9 why database is more popular with Node.js and why ?
//  MongoDB is one of the most popular databases used with Node.js
//  MongoDB is a NoSQL database, storing data in a document-oriented format (JSON-like BSON format). This schema-less structure aligns well with JavaScript
// objects, making it highly compatible with Node.js.

//10) What is the command used to Import external libraries
//  To import external libraries to our current or present file we use : require()
//  require() is global function which is used to import modules present in other files
//  To install : npm install library-Name

// 11) What is event loop in NodeJS ?
//  Event loop is the semi-infinite loop which is running continuously.
// it runs as long as there is pending asynchronous operation exists
//  It used to handle asynchronous operations and to perform non-blocking I/o operations
//  Responsible for asynchronous executions

// 12) How many phases event loop Contains and what are they?
//  There six phases in Node.js
// • Timers
// • Pending callbacks
// • Idle, prepare
// • Poll
// • Checks
// • Close callbacks

//13) Explain loops
//timers- this phase is responsible for handling timer function
//pending callbacks- this phase is responsible for handling pending callbacks
//idle and prepare- this phase is responsible for handling housekeeping purpose
//poll- this phase is responsible for handling $ polling event such as  file ,network input,output Operation
//check- this phase is for executing set immediate callbacks ONLY available in Node.js

// 14)what is package. Json file?
//  Json stands for JavaScript object notation
//  contains essential information about the project and its dependencies.
//  Contains metadata about the project
//  It is the essential part to understand ,learn and work with the project
// npm init-y
// npm init

//15 libuv
  // libuv is multi platform c library which provide support to excute asychronous opertains with out 
  //libuv we cant perform muliple operation in node.js
  // it the task is consuming then the task GIVE TO libuv 
//  16 threads in node.js 
//main thread            //worker thread
                         //libuv
                         //thread 1...thread 4
//16 comma js
// comma js is module formating 
// node uses common js module defalutly
// node support es6 module  
// it stands for structing and organising the js code   
// require()                  


//17 write an example for synchronus and as
                              //asynchronus code
                //    console.log("first");
                //    setTimeout(()=>{console.log("third")},1000)
                //    console.log("second");
// 18  D/B require() and import in NODE.js
//  In Node.js, there are two common ways to include external modules or files: require() and import
//  require() is for CommonJS, while import is for ES Modules.
//  require() is synchronous which means waits for the module to be fully loaded before proceeding
//  import() can be asynchronous
//  require() works in all versions of Node.js,but import requires Node.js 12+ with proper configuration ("type": "module" or .mjs).
//  Syntax:const fs = require('fs');
//  Syntax :import express from 'express'                
                                 // local modules
// 19 what is local modules?          
// the module which is created by developer is known as local module
                                       // importing
//!first way of importing

//? for single import we can take any name
// let abc=require('./module_export')
// console.log(abc(100,200))

// let {add,sub,div,mul}=require('./module_export')
// console.log(add(10,20))
// console.log(sub(20,10))
// console.log(div(100,20))
// console.log(mul(10,20))

//!2nd way of importing
// let value=require('./module_export')
// console.log(value.multiplication(20,50))
// console.log(value.division(50,20))

//!first way of exporting

//? If I have only one function to export

// let add=(a,b)=>{
//     return a+b;
// }

// let sub=(a,b)=>{
//     return a-b;
// }

// module.exports=add
// module.exports=sub

//!2nd way of exporting
// let mul=(a,b)=>{
//     return a*b;
// }
// let div=(a,b)=>{
//     return a/b;
// }

// module.exports={mul,div}
// or to give aliasing name
// module.exports.multiplication=mul
// module.exports.division=div

// //!3rd way of exorting
// exports.add=(a,b)=>{
//     return a+b;
// }
// exports.sub=(a,b)=>{
//     return a-b;
// }
// exports.mul=(a,b)=>{
//     return a*b;
// }
// exports.div=(a,b)=>{
//     return a/b;
// }
                                         // built-in module
 // 20)what is built-in module?    
 // this module are known as core modules  and pre defined modules 
 // alrready present inside the node js                                  
  // require()    
  // let fs=require('fs')
  //eg) fs,os,path,url,http          
                                        //fs module file system
     //function                            //  sync                                   


//    read file                                                             
                                  // ?Syntax: readFileSync                                            
                                  // ('path of file','utf-8')
                                  //  let data=fs.readFileSync
                                  //  ('./node.txt','utf-8')
                                  // console.log(data)

//write a file                  //?Syntax: writeFileSync
                               //   ('filename','data you want to write')
                                // fs.writeFileSync('./node1.txt','I am text File')
                                // console.log("write file is successful")
                                // Note:If file is not present it will 
                                // create a new file and write the data to it       



//   append file                  //?Syntax: appendFileSync
                                 //('path of file','data you want to write')
                                 // fs.appendFileSync('./node2.txt','We are Feeling________\n')
                                 // console.log("Data is appended")
                                 // Note:If file is not present it will
                                 //  create a new file and write the data to it

//   delete file                 //!delete a file
                                 // fs.unlinkSync('./node1.txt')
                                   // console.log("deleted")




//   rename file            
                                 //?rename a file
                                 // fs.renameSync('./node.txt','Express.js')
                                // console.log("file renamed")




                                         // folder


//   create folder              // fs.mkdirSync('./Nodejs')
                                // console.log("folder created")





//  create  nested folder           // fs.mkdirSync('./Nodejs/node_2pm')
                                  // console.log("folder created")




//   delete folder                // fs.rmdirSync('./Nodejs')
                                  // console.log("deleted")





//   rename folder   
                                // fs.renameSync('./nodejs','./Express')
                                // console.log('renamed')
                                                 //Buffer 
// 21)Buffer
//It is a class in Nodejs
//It is a temporary storage where we can store chunk of data and transfer it to another place
//It is a way to store and manipulate binary data in Nodejs
//It stores in the form of 0's & 1's
//It includes videos, audios, raw data and images

//22!How to create buffer?
//To create buffer we have several methods
//?1. Buffer.from() method
//Syntax: Buffer.from(value)

// 23 examples of buffer
//?Example: 
// const buffer = Buffer.from('Hello World');
// console.log(buffer)
// console.log(buffer.toString())

//?2. Buffer.alloc() method
//?Syntax: Buffer.alloc(size,value)
//!Example:
// let buffer=Buffer.alloc(6)
// let buffer2=Buffer.alloc(3,'A')
// console.log(buffer) 
// console.log(buffer2)

// let buff3= Buffer.alloc(5)
// buff3.write("Hello Macha")
// console.log(buff3.toString())

//?3.Buffer.isBuffer()
//?Syntax: Buffer.isBuffer(value)

// let buf1=Buffer.from("Hello")
// let buf2="Hello"
// console.log(Buffer.isBuffer(buf1))
// console.log(Buffer.isBuffer(buf2))

//?4. To know the length of the buffer
//?Syntax: buffer_variable.length
// let buf1=Buffer.from("Hello World")
// console.log(buf1.length)

//?5. slice()
//?Syntax: buffer_variable.slice(startIndex,endIndex)

// let buf1=Buffer.from("Hello Nodejs People")
// let buf2=buf1.slice(0,7)
// console.log(buf2.toString())  
                                            //stream 

//24 what is Streams:
// Streams are collection of data like arrays or strings
// streams might not available all at once
// streams don't have to fit in memory
// Used to handle or manipulate the data like videos, large files etc...
// streams are used to transfer the data chunk by chunk

//  Types of Streams:
// 1. Readable Stream
// 2. Writable Stream
// 3. Duplex Stream

// 25 explain about thr types of stream 
//!1. Readable Stream: These the are the streams which are used to read the data from the files and network i/o connections etc...

//! 2. Writable Stream: These the are the streams which are used to write the data to the files and network i/o connections etc...

//! 3. Duplex Stream: These the are the streams which are used to read and write the data at a time.


//26 ! define Events
// Events are the actions that occur during the execution of the code
//?data: This event fires/triggers whenever we have data to read from the stream
//?end: This event fires/triggers when there is no more data to read from the stream
//?error: This event fires/triggers when there is an error in the stream
//?finish: This event fires/triggers when the stream has finished processing the data
//27
const fs=require('fs')
// let readData=fs.createReadStream('./streams2.js','utf-8')
// readData.on('data',data=>{
//     console.log(data)
// })

// readData.on('end',_=>{
//     console.log("reading is finished")
// })

// readData.on('error',err=>{
//     console.log(err)
// })

// readData.on('close',_=>{
//     console.log("all events are closed")
// })             

 //28 types of stream example
//!writableStream

// let writeData=fs.createWriteStream('writeStream.txt')
// writeData.write("Streams are collection of data like arrays or strings")


// let readData=fs.createReadStream('./streams1.js','utf-8')
// readData.on('data',data=>{
//     fs.createWriteStream('writeStream.txt').write(data)
//     console.log("read and write successful")
// })

//29 duplex stream example
//!duplex streams:
// let readData=fs.createReadStream('./streams1.js')
// let writeData=fs.createWriteStream('writeStream2.txt')
// readData.pipe(writeData)
                                  //os module
//30
// os modu;e  git init

// Streams:
// Streams are collection of data like arrays or strings
// streams might not available all at once
// streams don't have to fit in memory
// Used to handle or manipulate the data like videos, large files etc...
// streams are used to transfer the data chunk by chunk

// Types of Streams:
// 1. Readable Stream
// 2. Writable Stream
// 3. Duplex Stream


//!1. Readable Stream: These the are the streams which are used to read the data from the files and network i/o connections etc...

//! 2. Writable Stream: These the are the streams which are used to write the data to the files and network i/o connections etc...

//! 3. Duplex Stream: These the are the streams which are used to read and write the data at a time.


//!Events
// Events are the actions that occur during the execution of the code
//?data: This event fires/triggers whenever we have data to read from the stream
//?end: This event fires/triggers when there is no more data to read from the stream
//?error: This event fires/triggers when there is an error in the stream
//?finish: This event fires/triggers when the stream has finished processing the data

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


//!writableStream

// let writeData=fs.createWriteStream('writeStream.txt')
// writeData.write("Streams are collection of data like arrays or strings")


// let readData=fs.createReadStream('./streams1.js','utf-8')
// readData.on('data',data=>{
//     fs.createWriteStream('writeStream.txt').write(data)
//     console.log("read and write successful")
// })


//!duplex streams:
let readData=fs.createReadStream('./streams1.js')
let writeData=fs.createWriteStream('writeStream2.txt')
readData.pipe(writeData)
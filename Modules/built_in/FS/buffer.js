//!Buffer
//It is a class in Nodejs
//It is a temporary storage where we can store chunk of data and transfer it to another place
//It is a way to store and manipulate binary data in Nodejs
//It stores in the form of 0's & 1's
//It includes videos, audios, raw data and images

//!How to create buffer?
//To create buffer we have several methods
//?1. Buffer.from() method
//Syntax: Buffer.from(value)
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
nc
let buff3= Buffer.alloc(5)
buff3.write("Hello Macha")
console.log(buff3.toString())

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
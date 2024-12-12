//!first way of importing

//? for single import we can take any name
// let abc=require('./module_export')
// console.log(abc(100,200))

let {add,sub,div,mul}=require('./module_export')
console.log(add(10,20))
// console.log(sub(20,10))
console.log(div(100,20))
console.log(mul(10,20))

//!2nd way of importing
// let value=require('./module_export')
// console.log(value.multiplication(20,50))
// console.log(value.division(50,20))



// const mongodb=require('mongodb').MongoClient
// const url="mongodb://localhost:27017"

// let connectDb=async()=>{
//     let connection= await mongodb.connect(url)
//     console.log('database connected')
//     let database= await connection.db('Node_2pm')
//     console.log('database created')
//     let collection= await database.createCollection('Node_2pm')
//     console.log('collection created')
//     collection.insertOne({name:'abc',age:20})
//     console.log('data inserted')
//     collection.insertMany([{name:'abc',age:20},{name:'abc',age:20},{name:'abc',age:20},{name:'abc',age:20},{name:'abc',age:20}])
//         console.log('data inserted')
    // let data= await fetch('https://fakestoreapi.com/users')
    // let json=await data.json()
    // collection.insertMany(json)

    // let onedata=await collection.findOne()
    // console.log(onedata)

    // let singledata=await collection.findOne({name:'abc'})
    // console.log(singledata)

    //     let singledata=await collection.find({name:'abc'}).toArray()
    // console.log(singledata)

    // let finaldata=await collection.find().toArray()
    // console.log(finaldata)

    // let updatedata=await collection.updateOne({name:'abc'},{$set:{name:'nodejs'}})
    // console.log("data updated")

    // let updatedata=await collection.updateMany({name:'abc'},{$set:{name:'nodejs'}})
    // console.log("data updated")

    // let delete1 = await collection.deleteOne({name:'nodejs'})
    // console.log("data deleted")

    // let delete1 = await collection.deleteMany({})
    // console.log("data deleted")
// }
// connectDb()










// const server=http.createServer((req,res)=>{
// })
// server.listen(5000,err=>{
//     if(err) throw err;
//    console.log("Server is running on 5000  port") 
// })
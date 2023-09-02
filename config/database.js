const mongoose = require("mongoose")

// enverment verbials 
const URL = process.env.DB_HOST  || "mongodb://localhost:27017/DellNow"

// DataBase connection 
 const connect =   mongoose.connect(URL,{
    useNewUrlParser: true,
  })
  .then((connection)=>{
  console.log("host-------",connection.connection.host);
  }).catch((error)=>{
    console.log(error)
  })



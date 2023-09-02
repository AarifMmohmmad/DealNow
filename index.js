// Import required modules and libraries
const express = require("express")
const app = express()


// Load environment variables from .env file
const dotenv = require("dotenv").config()


// Middleware
app.use(express.json())


// Handle other routes (e.g., 404 Not Found)
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
  });

//environment variables
const port =  process.env.PORT || 4000
const ip = process.env.IP || "localhost"


// server start 
app.listen(port,ip,(req,res)=>{
    console.log(`server will be started in port ${port} and Ip is ${ip}`);
})
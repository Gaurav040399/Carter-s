const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./database/db");
const {userRoute} = require("./route/user.route")


const app = express();
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.use("/users",userRoute)



app.listen(process.env.PORT,async()=>{

    try {
        await connection
        console.log("Connected to DB")  
        console.log("http://localhost:8000")      
    } catch (error) {
        console.log("connot connect to DB")
    }
    console.log("server is running")

})
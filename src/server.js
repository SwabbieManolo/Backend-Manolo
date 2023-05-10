require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/router")

const app = express();


/*app.get('/' , (req,res) =>{
    res.status(200).send({
        "message":"welcome to server"
    })
})*/

//router
app.get('/api/student', Routes)


mongoose.connect(process.env.MONGO_URL).then(() =>{
    app.listen(process.env.PORT, ()=>{
        console.log(`server is running`, process.env)
        })
})

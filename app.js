const express = require("express")
const app = express()
require("dotenv").config()
app.use(express.json())
app.use("/",require("./routers/router"))



app.listen(4040,()=>{
    console.log('conected server');
})
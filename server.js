const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("yeji i love you!");
})

app.listen(3000,()=>{console.log("serveron")});

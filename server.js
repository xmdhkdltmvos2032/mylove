const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("예지야진심으로사랑해!!");
})

app.listen(3000,()=>{console.log("serveron")});

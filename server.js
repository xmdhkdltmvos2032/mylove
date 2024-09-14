const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("황예지님은 저에게는 예수,부처,알라 그이상의 존재이십니다.");
})

app.listen(3000,()=>{console.log("serveron")});

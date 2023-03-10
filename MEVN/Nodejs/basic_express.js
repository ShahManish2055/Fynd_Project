const express = require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("rout at  root");
});

app.get("/hello",(req,res)=>{
    res.send("route at hello");
});
app.listen(3000,()=>{
    console.log("Listening on 3000");
});
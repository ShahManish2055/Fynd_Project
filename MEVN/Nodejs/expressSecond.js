const express=require("express");
const userService =require("./ownModule.js");
const app=express();
app.use(express.json());

app.get("/users",async(request,response)=> {
    try{
        const users=await userService.getUserDate();
        response.status(200).json(users);
    }catch(error){
        console.error(error);
    }
});
app.listen(3000)
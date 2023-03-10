const mongoose=require("mongoose");
// const url="mongodb://localhost:27017/Client";
const url = "mongodb://127.0.0.1:27017";

const userSchema=new mongoose.Schema(
    {
        _id:Number,
        username:String,
        email:String
    },
    {
        _id:false
    }
);
const User =new mongoose.model("users",userSchema);

async function run(){
    try{
        await mongoose.connect(url);
        const user= User({namr:"shah",email:"smanish205@gmail.com",_id:5});
        await user.save();
        const docs=await User.find({});
        docs.forEach((doc)=>console.log(doc));
    }catch(error){
        console.error(error);
    }finally{
        await mongoose.disconnect();
    }
} 
run();
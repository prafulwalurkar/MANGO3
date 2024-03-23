const express = require("express");
const app = express();
const mongoose =require("mongoose");
const path = require("path");
const Chat = require(".models/Chat.js");

app.set("views", path.join(__dirname,"views"));
app.set("views engine","ejs");

main().then(()=>{
    console.log("connection successfull");
})
.catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsup');
}

let chat1 = new chat({
    from : "neha",
    to : "riya",
    msg : "send me your sheets",
    created_at : new Date()
});

chat1.save().then((res)=> {
    console.log(res);
});

app.get("/",(req, res) =>{
    res.send("root is working");
});


    app.listen(8080, () => {
console.log("server id lisening on port 8080");
});
const mongoose =require("mongoose");
const Chat = require("./models/Chat.js");


main().then(()=>{
    console.log("connection successfull");
})
.catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsup');
}


let allChats =[
    {
    from : "Neha",
    to : "Riya",
    msg : "send me your sheets",
    created_at : new Date(),
},
{
    from : "Ritu",
    to : "Riya",
    msg : "teach me js callback",
    created_at : new Date()
},
{
    from : "Tony",
    to : "Stark",
    msg : "send me iron man",
    created_at : new Date()
},
{
    from : "Grrot",
    to : "Hulk",
    msg : "send me you gf",
    created_at : new Date()
}
];

Chat.insertMany(allChats);
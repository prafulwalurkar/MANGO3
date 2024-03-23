const mongoose =require("mongoose");

const chatSchema = new mongoose.Schema({

    from : {
        type : String,
        require :true
    },
    to : {
        type : String,
        require :true
    },
    msg : {
        type : String,
        maxlenght:50,
        require:true
    },
    created_at : {
        type : Date,
        require :true
    }
});

const Chat = mongoose.model("Chats", chatSchema);

module.exports = Chat;
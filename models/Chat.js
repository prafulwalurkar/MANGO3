const mongoose =require("mongoose");

const ChatSchema = new mongoose.Schema({

    from : {
        type : String,
        require :true
    }
    to : {
        type : String,
        require :true
    }
    msg : {
        type : String,
        maxLength:50,
    }
    created_at : {
        type : Date,
        require :true
    }
});

const Chat = mongoose.model("Chats", ChatSchema);

module.exports = Chat;
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    }
},
//{ typeKey: '$type' }
)

const User = new mongoose.model('User',userSchema);
module.exports = User
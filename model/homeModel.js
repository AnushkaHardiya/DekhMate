const mongoose = require("mongoose")

const homeModuleSchema = new mongoose.Schema({
    houseAddress:{
        type: String,
        required:true
    },
    houseType:{
        type: String,
        required:true
    },
    houseRent:{
        type: String,
        required:true,
        unique:true
    },
    houseRequiredRoomate:{
        type: String, 
        required:true
    }
},
)
const HomeModule = new mongoose.model('Houses',homeModuleSchema);
module.exports = HomeModule
const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    name : String,
    email : {require:true,type:String,unique:true},
    password : String,
    location: String
},{
    versionKey:false
})


const UserModel = mongoose.model("user",userSchema);

module.exports = {
    UserModel
}
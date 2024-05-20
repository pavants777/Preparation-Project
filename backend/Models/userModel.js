const mongoose = require('mongoose')

const userSchem = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
    },
    password : {
        type: String,
        required: true,
        trim: true, 
    }
})

const User = mongoose.model("User",userSchem);

module.exports = User;
const mongoose = require('mongoose')


const User = mongoose.model('users',{
    email :{
        type: String
    },
    userName :{
        type: String
    },
    password :{
        type: String
    },
    accountType :{
        type: String
    }
    
})
module.exports= User;
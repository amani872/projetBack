const mongoose = require('mongoose')
const Product = mongoose.model('products',{
    title :{
        type: String
    },
    description :{
        type: String
    },
    price :{
        type: Number
    },
    image :{
        type: String
    },
    
})
module.exports= Product;
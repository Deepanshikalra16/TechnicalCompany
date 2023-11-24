const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    description:{
        type:String,
        require:true
    }
});

const productModel= mongoose.model('product',productSchema)
module.exports = productModel;
 
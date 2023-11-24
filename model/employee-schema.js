const mongoose= require('mongoose')

const userSchema= mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    employeeid:{
        type:Number,
        required:true
    },
    number:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    }
});

const employeeModel= mongoose.model('employee',userSchema)
module.exports = employeeModel
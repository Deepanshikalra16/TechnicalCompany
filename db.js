const mongoose= require('mongoose');

const data= mongoose.connect;
mongoose.connect('mongodb+srv://deepanshikalra55:Vkff9jaNPsxF2CyW@cluster0.u4puhuy.mongodb.net/demo?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("connecttion successfull"))
.catch((err) => console.log(err));



module.exports=data;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://deepanshikalra55:Vkff9jaNPsxF2CyW@cluster0.u4puhuy.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log("connection successfully.."))
.catch((err) => console.log(err));





// schema
// a mongoose schema defines the structure of the document
// default values, validation,etc...

const listSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
});

const Playlist = new mongoose.model("Playlist",listSchema);

// playlist parameter is a name of collection



// inserting data

const createDocument = async() =>{
    try{
        const productlist1 = new Playlist({
            name: 'sita',
            email:'sita@gmail.com'
        })

        // productlist1.save()    ->to insert single document
        const productlist2 = new Playlist({
            name:'meeta',
            email:'meeta@gmail.com'
        })
        const productlist3 = new Playlist({
            name:'neeta',
            email:'neeta@gmail.com'
        })
        const result = await Playlist.insertMany([productlist1,productlist2,productlist3]);
        console.log(result);
    }
        // then(){
        //     console.log("data inserte..")
        // }
        
        catch (err){
            console.log(err);
        }
    
}
// createDocument();

const getDocument = async()=>{
    const result = await Playlist.find();
    console.log(result);
}
// getDocument();

const getDocument1 = async()=>{
    const result = await Playlist.find({name:"neeta"});
    console.log(result);
}
getDocument1();



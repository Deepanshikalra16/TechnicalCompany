const express=require('express');

const app=express();

var cookieParser = require('cookie-parser');
var session = require('express-session');

const router=express.Router();

const data=require('./db');

const userModel= require('./model/register-schema');
const employeeModel = require('./model/employee-schema')
const bodyparser= require('body-parser');
const multer= require('multer');
const productModel= require('./model/product-schema')


app.use(express.static(__dirname+'/node_modules/bootstrap/dist'));
app.use(express.static(__dirname+'/upload'));
// app.use("/js",express.static(__dirname+ "node_modules/bootstrap/dist/js"));
app.use(express.static('views'))
app.use('/assserts',express.static('assserts'))
app.use(bodyparser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(
    session({
        key: "user_sid",
        secret: "somerandonstuffs",
        resave: false,
        saveUninitialized: false,
        cookie:{
            expires: 600000,
        },
    })
);
// --- using session cookie-----//
app.use((req,res,next)=>{
    if(req.cookies.user_sid && !req.session.user){
        res.clearCookie("user_sid");
    }
    next();
})

app.set('view engine','ejs');

router.get('/',function(req,res){
    res.render('./index')
})

router.get('/about',function(req,res){
    res.render('./about')
})
router.get('/services',function(req,res){
    res.render('./services')
})

// Login page get 
router.get('/login',function(req,res){
    res.render('./contact-page')
})




router.get('/footer',function(req,res){
    res.render('./footer')
})
router.get('//',function(req,res){
    // if(req.session.user && req.cookies.user_sid){
    res.render('dashboard/index')
// }
})


// login page post

router.post('/login',async (req,res)=>{
    let email = req.body.email,
      pass= req.body.pass;

      try{
        var user = await userModel.findOne({email: email})
        .exec();
        // console.log(user)
        if(!user){
            res.redirect('/login');
        }
        user.comparePassword(pass,(error,match)=>{
            if(!match){
                res.redirect('/login'); 
            }
        })
        req.session.user = user;
       res.redirect("/");
        console.log(user)
      }catch(err){
        console.log(err);
      }
})


router.get('/registration',function(req,res){
    res.render('registration');
})
router.post('/sign-up',(req,res)=>{
    var user = new userModel({
        fname: req.body.fname,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone
    });
    user.save().then((result) =>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    });
});

router.get('/add-employee',(req,res)=>{
    res.render('dashboard/add-employee.ejs')
})

router.post('/employee',(req,res)=>{
    var employees = new employeeModel({
        fname: req.body.fname,
        employeeid: req.body.employeeid,
        number: req.body.number,
        address: req.body.address,
        designation: req.body.designation
    });
    employees.save().then((result) =>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    });
})

// getting employee data from database
router.get("/employee_list",async(req,res)=>{
    try{
        const employeedata = await employeeModel.find({});
        res.render('dashboard/employee-list',{employeedata: employeedata});
        console.log(employeedata);
    } catch(err){
        console.log(err);
    }
})



//////getting registration data from database
router.get("/registration-data",async(req,res)=>{
    try{
        const userregistration = await userModel.find({});
        res.render('dashboard/view-resgistration',{userregistration: userregistration});
        console.log(userregistration);
    } catch(err){   
        console.log(err);
    }
})



// delete api registration

router.get("/delete/:id",async(req,res)=>{
    try{
        const userdata= await userModel.findByIdAndRemove(req.params.id);
        console.log(userdata);
        res.redirect("../registration-data");     
    } catch(err){
        console.log(err);
    }
})

// delete api employee
router.get("/delete1 /:id",async(req,res)=>{
    try{
        const employeesdata= await employeeModel.findByIdAndRemove(req.params.id);
        res.redirect("../employee_list");
        console.log(employeesdata)
    } catch(err){
        console.log(err);
    }
})

// edit get api
router.get("/edit/:id",async(req,res)=>{
    try{
        const userdata= await userModel.findById(req.params.id);
        res.render("dashboard/edit-registration",{userdata:userdata});
        console.log(userdata)
    } catch(err){
        console.log(err);
    }
})


// post edit api
// router.post("/edit/:id",async(req,res)=>{
//     try{
//         const updatedata= await userModel.findByIdAndUpdate(req.params.id);
//         res.redirect("../registration-data");
//         console.log(updatedata)
//     } catch(err){
//         console.log(err);
//     }
// })


router.post("/edit/:id",async(req,res)=>{
    const updatelogin=({
        fname: req.body.fname,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone
    });
        try{
            const updatedata= await userModel.findByIdAndUpdate(req.params.id,updatelogin);
            res.redirect("../registration-data");
            console.log(updatedata)
        } catch(err){
            console.log(err);
        }
    })




//file upload

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./upload');
    },
  filename: (req,file,cb)=>{
    cb(null,file.originalname);
    //cb(null, uuidv4()+'-'+ Date.now() +path.extname(file.originalname));
  }  
});

const fileFilter = (req,file,cb)=>{
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true);
    } else{
        cb(null,flase);
    }
}

let upload = multer({storage, fileFilter});



// add-product

router.get('/add-product',(req,res)=>{
    res.render('dashboard/add-product')
})

// add-product api
router.post('/add-product',upload.single('image'),(req,res)=>{
    var userproduct = {
        productname       : req.body.productname,
        image               : req.file.filename,
        description       : req.file.description
        }                                                                                                                                                                                                                        
        
    var addproduct=new  productModel(userproduct);
    addproduct.save()
    .then(()=>{
        console.log("saved data");
       
    })
    .catch((err)=>{
        console.log(err);
        
    });
});


// uploading image api
// router.get("/reactdev",async(req,res)=>{
//     try{
//         const product = await productModel.find({});
//         res.render('react-dev',{product: product});
//         console.log(product);
//     } catch(err){
//         console.log(err);
//     }
// })




router.get("/reactdev",async(req,res)=>{
    try{
        const product = await productModel.find({});
        res.render('react-dev',{product:product });
        console.log(product);
    } catch(err){   
        console.log(err);
    }
})


app.use('/',router)
app.listen(4000);
const mysql=require('mysql2');
// const { compare } = require('semver');

var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'root',
    database:'details'
});

connection.connect(function(error){
    if(error)throw error;
    console.log("connected");

    // connection.query('create database details', function(err,eesult){
    //     if(err)throw err;
    //     console.log('database created');
    // })
    // var sql = "create table customers (name varchar(255), address varchar(255))";
    // connection.query(sql,function(err,result){
    //     if(err)throw err;
    //     console.log('table created');
    // });
    // var row1 = "insert into customers (name, address) values ('staveo tech','gurgaon')"
    // connection.query(row1,function(err,result){
    //     if(err)throw err;
    //     console.log('row1 created');
    // })

    // var row2= "insert into customers (name, address) values ('company.inc', 'noida')"
    // connection.query(row2,function(err,result){
    //     if(err)throw err;
    //     console.log('row1 created');
    // })
    // var row3 ="insert into customers (name, address) values ?";
    // var values = [
    //     ['deepanshi','sadh nagar'],
    //     ['rajesh','chandigarh'],
    //     ['ankit','bihar'],
    //     ['Hannah', 'Mountain 21'],
    //     ['Michael', 'Valley 345'],
    //     ['Sandy', 'Ocean blvd 2'],
    //     ['Betty', 'Green Grass 1'],
    //     ['Richard', 'Sky st 331'],
    //     ['Susan', 'One way 98'],
    //     ['Vicky', 'Yellow Garden 2'],
    //     ['Ben', 'Park Lane 38'],
    //     ['William', 'Central st 954'],
    //     ['Chuck', 'Main Road 989'],
    //     ['Viola', 'Sideway 1633'],
    //     ['Vicky', 'Yellow Garden 2'],
    //     ['Ben', 'Park Lane 38'],
    //     ['William', 'Central st 954'],
    //     ['Chuck', 'Main Road 989'],
    //     ['Viola', 'Sideway 1633']
    // ];
    // connection.query(row3, [values],function(err,result){
    //     if(err) throw err;
    //     console.log("no. of rows created " + result.affectedRows);
    //     console.log(result.insertId);
    // })

    // connection.query('select name,address from customers',function(err,result,fields){
    //     if(err)throw error;
    //     console.log(result[15].address);
    //     console.log(fields);
    //  })

    // connection.query("select * from customers where name= 'vicky'",function(err,result){
    //     if(err)throw err;
    //     console.log(result);
    // })

// delete


    // var del = "delete from customers where name= 'chuck'";
    // connection.query(del, function(err,result){
    //     if(err)throw err;
    //     console.log(result);
    //     console.log(result.affectedRows);
    // }) 

// connection.query("select * from customers where address like 's%'", function(err,result){
//     if(err) throw err;
//     console.log(result);
// })

// connection.query("select * from customers order by name",function(err,result){
//     if(err)throw err;
//     console.log(result);
// })

// connection.query("select * from customers order by name desc",function(err,result){
//     if(err) throw err;
//     console.log(result);
// })


// delete

// connection.query("delete from customers where name='michael'",function(err,result){
//     if(err)throw err;
//     console.log(result);

// } )

// update

// var sql = "update customers set name= 'tanmay' where address='ocean blvd 2'";
// connection.query(sql,function(err,result){
//     if(err)throw err;
//     console.log(result.affectedRows);
//     console.log(result);
// })

// var sql = "select * from customers limit 2,5";
// connection.query(sql,function(err,result){
//     if(err)throw err;
//     console.log(result);
// })

// drop table

// var sql="drop table if exists customers";
// connection.query(sql,function(err,result){
//     if(err)throw err;
//     console.log("table deleted");
// })

// var sql="create table users (customer_id int, name varchar(255), product varchar(255))";
// connection.query(sql, function(err,result){
//     if (err)throw err;
//     console.log("table created");
// })

// var data="insert into users values ?";
// var values=[
//     [1,'John', 'Highway 71'],
//     [2,'Peter', 'Lowstreet 4'],
//     [3,'Amy', 'Apple st 652'],
//     [4,'Hannah', 'Mountain 21'],
//     [5,'Michael', 'Valley 345'],
//     [6,'Sandy', 'Ocean blvd 2'],
//     [7,'Betty', 'Green Grass 1'],
//     [8,'Richard', 'Sky st 331'],
//     [9,'Susan', 'One way 98'],
//     [10,'Vicky', 'Yellow Garden 2'],
//     [11,'Ben', 'Park Lane 38'],
//     [12,'William', 'Central st 954'],
//     [13,'Chuck', 'Main Road 989'],
//     [14,'Viola', 'Sideway 1633']
// ]
// connection.query(data ,[values], function(err,result){
//     if(err) throw err ;
//     console.log("data inserted");
// })

// var sql="delete from users";
// connection.query(sql,function(err,reesult){
//     if(err)throw err;
//     console.log("data deleted");
// })

// var sql2="create table product (customer_id int, product_name varchar(255))";
// connection.query(sql2, function(err,result){
//     if(err) throw err;
//     console.log("table 2 created");
// })

// var data= "insert into product values ?";
// var values2=[
//     [1,'dairy milk'],
//     [2,'butter'],
//     [3,'cheese'],
//     [4,'kit kat'],
//     [5,'maida'],
//     [6,'coca cola'],
//     [7,'mirinda'],
//     [8,'rings'],
//     [9,'kurkure'],
//     [10,'chips'],
//     [11,'pen'],
//     [12,'wheat'],
//     [13,'gram flour'],
//     [14,'dictionary']
// ];
// connection.query(data,[values2], function(err, result){
//     if(err) throw err;
//     console.log('product added');
// });



var t= "select * from product where product_name like '%a' and length(product_name)= 5";
connection.query(t,function(err,result){
    if(err)throw err;
    console.log(result);
})
});
//request - response => server

var express = require('express');
const app = express();

app.set("view engine","ejs");

//routes
app.use("/products/:id",function(req,res){
    res.send("products details"+req.params.id);
});

app.use("/products",function(req,res){
    res.send("products");
});

app.use("/",function(req,res){
    res.send("anasayfa");
});

app.listen(3000,()=>{
    console.log('express 3000 port listening');
});





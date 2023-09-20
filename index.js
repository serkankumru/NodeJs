//request - response => server
var express = require('express');
const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

const data = [
    {id:1, name:"iphone-14",price:3000,isHome:true,isActive:true,imgUrl:"image-1.jpg"},
    {id:2, name:"iphone-15",price:4000,isHome:true,isActive:true,imgUrl:"image-2.jpg"},
    {id:3, name:"iphone-16",price:5000,isHome:true,isActive:true,imgUrl:"image-3.jpg"},
    {id:4, name:"iphone-17",price:6000,isHome:true,isActive:false,imgUrl:"image-4.jpg"},
    {id:5, name:"iphone-18",price:7000,isHome:true,isActive:true,imgUrl:"image-5.jpg"},
]

//routes
app.use("/products/:id",async function(req,res){
    const product = data.find(p=> p.id == req.params.id);
    res.render("product-details",product);
});

app.use("/products",async function(req,res){
    try{
        res.render("products", {
            urunler:data
        });
    }
    catch(err){
        console.log(err);
    }
});

app.use("/",async function(req,res){
    try{
        res.render("index", {
            urunler:data
        });
    }
    catch(err){
        console.log(err);
    }
});

app.listen(3000,()=>{
    console.log('express 3000 port listening');
});





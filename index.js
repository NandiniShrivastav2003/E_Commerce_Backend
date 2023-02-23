const express=require("express");
const app=express();
const path= require("path");
const engine=require("ejs-mate");
const { default: mongoose } = require("mongoose");
const PORT=2000;

mongoose.connect("mongodbc//127.0.0.1:27017/shopping-app")
.then(()=>console.log("DB connected"))
.catch((err)=>console.log(err))

//ejs-mate => provide extra functionalities
app.engine("ejs",engine);
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/products",(req,res)=>{
    res.render("./products/product");
})
app.listen(PORT,()=>{
console.log(`server is running at port ${PORT}`);
})
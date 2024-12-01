import express from "express";
import ejs from "ejs";
import process from "process";
import path from "path";
import makeTable from "./public/js/main.js";
import products from "./public/js/productData.js";
const app=express();
app.use(express.static(path.join(process.cwd(),'views')));
app.use(express.static(path.join(process.cwd(),'public')));
//koi jaruruat nahi hai '/' ko folder ke aage add karne ke express apne aap kar dega
app.set("view engine","ejs");
app.set("views", path.join(process.cwd(),"views"));

app.get('/',function(req,res,next){
    res.send("welcome to home page.")
});
app.get('/products',function(req,res,next){
    res.render("index.ejs");    
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
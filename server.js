import express from "express";
import ejs from "ejs";
import path from "path";
import ejsMate from "ejs-mate";
import {__dirname} from "./utils/utility.js";
const app=express();
app.set("views", path.join(__dirname,"..","views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(express.static("public"));

app.get('/',function(req,res,next){
    res.send("welcome to home page.")
});
app.get('/products',function(req,res,next){
    res.render("index");    
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
const express = require("express");
const app = express();
const port = 8080;

const path = require("path");  // for accessing other folders from indes.js

app.use(express.urlencoded({extended: true}));  // for parsing of form data 

app.set("view engine","ejs");  // use EJS as template design 
app.set("views",path.join(__dirname,"views"));  // build the path to view folder

app.use(express.static(path.join(__dirname,"Public")));

const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'



app.listen(port, ()=>{
    console.log("listening to Port 8080");
})

let posts = [
    {
        id : uuidv4(),
        username : "Numan",
        content : "This is my code",
    },
    {
        id : uuidv4(),
        username : "khan",
        content : "How are You",
    },
    {
        id : uuidv4(),
        username : "Danish",
        content : "Football is my favorite",
    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs", {posts}); 
});

app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let { username, content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let post = posts.find((p)=> id === p.id);   
    res.render("show.ejs", {post});
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs", {post});
})
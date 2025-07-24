const express = require("express");
const app = express();
const port = 8080;
const path = require("path");  // for accessing other folders from indes.js

const methodOverride = require('method-override')

app.use(express.urlencoded({extended: true}));  // for parsing of form data 
app.use(methodOverride('_method'))
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
        content : "Hi, I’m Mohammad Numan, a passionate and detail-oriented Software Engineering student at UET Lahore. I enjoy building creative and functional solutions through programming, with hands-on experience in languages like Python, Java, and C++. I’m also an active member of student societies, where I contribute to organizing events and managing documentation. My goal is to continuously grow in the tech field and make a meaningful impact through innovation and collaboration.",
    },
    {
        id : uuidv4(),
        username : "khan",
        content : "I'm deeply interested in backend development, where logic, structure, and performance come together to power great user experiences. I enjoy working with Node.js, Express, MongoDB, and RESTful APIs to build robust, secure, and scalable systems. Solving real-world problems through code, optimizing database interactions, and ensuring smooth server-side operations is where I find my passion. Always eager to learn more and take on challenging backend projects that help me grow and contribute meaningfully.",
    },
    {
        id : uuidv4(),
        username : "Danish",
        content : "Love is not just a feeling — it’s a choice we make every day, It’s about patience when times get tough, support when the world feels heavy, and understanding even when words fall short. Real love doesn’t fade; it grows through kindness, trust, and presence. Sometimes it’s loud and full of laughter, other times it’s quiet and comforting like a hand held in silence. In the end, love is the most powerful connection we can share — with others, and with ourselves",
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
});

app.patch("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> p.id === id );
    post.content = newContent;
    res.redirect("/posts");
});

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
});
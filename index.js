const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");




const app = express();

// C R U D operation in api ki duniya
// get is method which is used to read 
// put is method which is used to update 
// post is method which is use to create
//delete is method which is used to delete

// craete a server-->>

const port = 4000;
app.use(bodyParser.urlencoded({extend: false}));



app.get("/",(req,res)=>{
    // res.send("<h1>Hello jii</h1>");
    res.sendFile(path.join(__dirname + "/index.html"));
});


app.get("/about",(req,res)=>{
    res.send("<h1>This is about page</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>This is contact page</h1>");
   
});
    //data is create and send
app.post("/api/v1/login",(req,res)=>{
    // const userName = req.body.name;
    res.send(`<h1> done mr. ${req.body.username}</h1>  <h3> your password is ${req.body.password}</h3> `);
    console.log(req.body);
});



app.listen(port, ()=> {
    console.log(`server is working on port: ${port}`);
});
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");



const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({extend: false}));

app.get("/",(req,res)=>{
    // res.send("<h1>Hello jii</h1>");
    res.sendFile(path.join(__dirname + "/index.html"));
});


app.post("/api/v1/LoginPage",(req,res)=>{
    // const userName = req.body.name;
    res.send(`<h1> done mr. ${req.body.username}</h1> <h3> your password is ${req.body.password}</h3> `);
    console.log(req.body);
});


app.listen(port, ()=> {
    console.log(`server is working on port: ${port}`);
});
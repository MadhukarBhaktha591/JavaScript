import express from "express";
import bodyParser from "body-parser";
/* *const express = require('express') older version */
/* *creating an instance of */
const app = express() /**Creates an express application. The express
function is a top-level  */

const port = 3000;

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})



/** Dummy data */
/** */
let blogs = [
]    
;

//Create a new blog
app.post('/blog',(req,res)=> {
        console.log(req.body);
    blogs.push(req.body);    
res.send(blogs)    
    //res.status(201).json(blogs);
});    



//Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//express.urlencoded({ extended: true});
//express.json();


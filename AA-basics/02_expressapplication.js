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
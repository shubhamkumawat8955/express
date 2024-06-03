const express = require('express');
const mongoose = require('mongoose');
const config = require("./config/config.json");
const db = require("./config/database.json");

const url = `mongodb://${db.development.host}:${db.development.port}/${db.development.database}`;
mongoose.connect(url);
mongoose.connection.on("error",(err)=> console.log(err));
mongoose.connection.on("open",()=> console.log("successfully connected"))


const app = express();
app.use(express.json());

app.listen((port = config.port), ()=> console.log("server is running"));



// const http=('http');
// http.createserver((req,res)=>{
//     res.writeHead('hello shubham')
//     res.end('hello');
// })

// .listen(8000,"",()=>{
//     console.log('listening to the port no 8000');
// });

// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080




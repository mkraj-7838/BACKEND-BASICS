// step1 - create folder
// step2 - move into that folder
// step3 - npm init -y
// step4 - open folder using vscode
// step5 - npm i express
// step6 - create server.js

// Server Initiation--- creating server
 const express = require('express');
 const app = express();

//  activate the server on 3000 port
 app.listen(3000, ()=>{
    //behaviour
    console.log("Server started at port no. 3000")
 });

// used to parse req.
const bodyParser = require("body-parser");
// parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

 //routes
 app.get('/', (request,response)=>{
    response.send("hello everyone, How are you?");
 })

app.post('/api/cars',(request, response)=>{
    const{name, brand}=request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully.")
})


const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Cars", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established");
  })
  .catch((error) => console.log(error));
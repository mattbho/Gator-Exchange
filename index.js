var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000

// set view engine to ej templating engine

app.set("view engine", "ejs");
<<<<<<< HEAD
=======

// use of middleware to server static public directory

app.use(express.static("public"));
>>>>>>> d23dd3f053608028a932ab3cfe08ab69250bc050



// controllers

require('./controllers/about.js')(app)



// server start at PORT

app.listen(PORT, process.env.IP, function (){
  console.log("Server is listening");
});
var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("About me!");
});


app.listen(8888, process.env.IP, function (){
  console.log("Server is listening");
});
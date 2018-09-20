var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000

app.get("/", function(req, res){
  res.send("About me!");
});


app.listen(PORT, process.env.IP, function (){
  console.log("Server is listening");
});
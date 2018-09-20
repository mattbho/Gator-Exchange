var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("about");
});


app.listen(PORT, process.env.IP, function (){
  console.log("Server is listening");
});
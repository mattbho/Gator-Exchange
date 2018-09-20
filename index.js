var express = require("express");
var app = express();

let port = process.env.PORT;
if(port == null || port == ''){
  port = 8000;
}


app.get("/", function(req, res){
  res.send("About me!");
});


app.listen(port, process.env.IP, function (){
  console.log("Server is listening");
});
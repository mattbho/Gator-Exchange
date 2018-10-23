var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000

app.get('/api/hello', (req, res)=> {
  res.json({message:"Hello"})
})

app.listen(PORT, process.env.IP, function (){
  console.log("Server is listening");
});


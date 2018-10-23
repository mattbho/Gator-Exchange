//Dependency Declaration
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const Posts = require("./models/Post.js");

//Port declaration
const PORT = process.env.PORT || 5000;

//Connecting to Database Server
mongoose.connect("mongodb://csc648team11:648team11@ds052837.mlab.com:52837/gatorexchange", {useNewUrlParser: true});

//Hardcoded First post into mongodb
/*
Posts.create({
    image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2015%2F06%2F521811839-copy.jpg&w=1000&q=85",
    description: "CSC 648 Solutions guide for sale",
    price: 50,
    sellerId: 1
  },
  function(err, post){
    if(err){
      console.log(err);
    } else{
      console.log("Newly created post");
      console.log(post);
    }
  }
);
*/

//TODO:Implement REST API routes
//TODO:Create, Read, Update, Index, Destroy, New


app.get('/api/:id', (req, res)=> {
  //Eventually route to search through mongodb using db.fine(). 1/7 Restful route
  //SHOW
  res.json({message:"Hello"})
})



//Start server
app.listen(PORT, process.env.IP, function (){
  console.log("Server is listening");
});


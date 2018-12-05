//Dependency Declaration
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const Posts = require("./database/models/Post.js");
const passport = require("./passport");
const dbConnection = require("./database");
const auth = require('./auth')
//Port declaration
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  session({
    secret: "Gator Exchange is the best!",
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  })
);
//Initialize passport

app.use(passport.initialize());
app.use(passport.session());


//TODO:Implement REST API routes
//TODO:Create, Read, Update, Index, Destroy, New

app.get("/api/:item", (req, res) => {
  //Eventually route to search through mongodb using db.fine(). 1/7 Restful route
  //SHOW
  let item = req.params.item;
  Posts.find({ _id: item }, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/allItems", (req, res) => {
  Posts.find(function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/allItems", (req, res) => {
  let category = req.body.value;
  let query = req.body.query;
  if (category !== "All") {
    Posts.find(
      {
        title: { $regex: ".*" + query + ".*", $options: "i" },
        category: category
      },
      function(err, result) {
        if (err) throw err;
        res.json(result);
      }
    );
  } else {
    Posts.find(
      { title: { $regex: ".*" + query + ".*", $options: "i" } },
      function(err, result) {
        if (err) throw err;
        res.json(result);
      }
    );
  }
});

//Auth Routes
//handle register(sign up)logic

//Get user routes

app.use('/auth', auth);


//Start server
app.listen(PORT, process.env.IP, function() {
  console.log("Server is listening");
});

const express = require("express");
const router = express.Router({mergeParams: true});
//const bodyParser = require('body-parser');
const User = require("../../database/models/Users");
const Message = require("../../database/models/Messages");

//Create new Message

router.post("/", (req,res) =>{
  let username = req.user.username;
  let subject = req.body.subject
  let text = req.body.text;
  User.findOne({username: username}, (err, user) =>{
    if(err){
      console.log("User doesn't exist");
    } else {
      let newMessage = new Message ({
        text: text,
        subject: subject,
        username: username
      })
      newMessage.save((err, savedMessage) =>{
        if(err) throw err;
        else {
          res.json(savedMessage);
        }
      })

      user.messages.push(newMessage);
      user.save();
    }
  })
})

//Get Messages
router.get("/allMessages", (req, res) => {
  let username = req.user.username;
  console.log(username);
  User.findOne({username: username}).populate("messages").exec(function(err, user){
    if(err){
      console.log(err);
    } else {
      res.json(user.messages);
    }
  })
})



//Delete message


module.exports = router
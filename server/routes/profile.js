const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const User = require('../models/User');

// Route protected for logged in user
router.get('/profile', isLoggedIn, (req, res, next) => {
  User.findById(req.user._id)  
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
})

router.get('/pubcrawl-detail/:pubCrawlId', isLoggedIn,(req,res,next) =>{
  PubCrawl.find({_user: req.user._id}) 
    .then(pubCrawl=>{ 
      if(pubCrawl._user.equals(req._user._id)){
        PubCrawl.findById(req.params.pubCrawlId)
          .then(() => {
            res.json({ message: `PubCrawl with is viewed successfully.` });
          })
          .catch( err => {
            res.json(err);
          })
      }
      else{
        res.json({message: "You're Not authorized"})
      }
    })
    .catch( err => {
      res.json(err);
    })
})

module.exports = router;
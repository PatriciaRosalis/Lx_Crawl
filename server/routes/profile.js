const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const User = require('../models/User');
const PubCrawl = require('../models/PubCrawl')

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

router.get('/pubCrawlsUser', isLoggedIn, (req, res, next) => {
  console.log(req.user._id)
  PubCrawl.find({_user: req.user._id})  
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
})



module.exports = router;
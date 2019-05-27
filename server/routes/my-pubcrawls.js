const express = require('express');
const PubCrawl = require('../models/PubCrawl');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();

// Route protected for logged in user
// isLoggedIn, 
router.get('/my-pubcrawls', (req, res, next) => {
  PubCrawl.find({_user: req.user._id}) 
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
}); 



module.exports = router;
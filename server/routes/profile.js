const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const User = require('../models/User');

// Route protected for logged in user
router.get('/profile', isLoggedIn, (req, res, next) => {
  User.findById(req.user)  
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
})

module.exports = router;
const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res, next) => {
  res.render('paws/home-page');
})

router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

// Route protected for logged in user
router.get('/profile', isLoggedIn, (req, res, next) => {
  User.find({ user: req.user._id })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
})

module.exports = router;

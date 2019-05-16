const express = require('express');
const PubCrawl = require('../models/PubCrawl')

const router = express.Router();

// Route to get all pubs
router.get('/', (req, res, next) => {
  PubCrawl.find()
    .then(allPubs => {
      res.json(allPubs);
    })
    .catch(err => next(err))
});

// Route to add a pub
router.post('/', (req, res, next) => {
  let { name, places} = req.body
  PubCrawl.create({ name, places })
    .then(newPub => {
      res.json({
        success: true,
        newPub
      });
    })
    .catch(err => next(err))
});

module.exports = router;
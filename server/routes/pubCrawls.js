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
  let { name, address, lng, lat, comments} = req.body
  PubCrawl.create({ 
    name: name, 
    places: [{
      address: address,
      location:{coordinates:[lng,lat]}
    }], 
    comments: comments
  })
    .then(response => {
      res.json(
        response
      );
    })
    .catch(err => next(err))
});

module.exports = router;
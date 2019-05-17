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
//router.post('/', (req, res, next) => {
//  let { name, places} = req.body
//  PubCrawl.create({ 
//    name: name, 
//    places,
//    _user: req.user._id
//  })
//  .then(response => {
//    res.json(
//      response
//    );
//  })
//  .catch(err => next(err))
//});


router.post('/', (req, res, next) => {
  PubCrawl.create({ 
    name: "",
    places: [], 
    comments: ""
  })
    .then(response => {
      res.json(
        response
      );
    })
    .catch(err => next(err))
});

//Route to get a specific pub crawl by its ID --- WORKS
router.get('/:pubCrawlId', (req, res, next) => {
  PubCrawl.findById(req.params.pubCrawlId)
    .then( pubCrawl => {
      res.json(pubCrawl)
    })
    .catch(err => next(err))
});

//Route to update the empty pub crawl that was created.
router.put('/:pubCrawlId', (req, res, next) => {
  const { name,
    places,
    comments} = req.body
  
  const updates =  { name,
    places,
    comments}
  PubCrawl.findByIdAndUpdate(req.params.pubCrawlId, updates, { new: true })
    .then(pubCrawl=> {
      res.json(pubCrawl)
    })
    .catch(next)
})

module.exports = router;
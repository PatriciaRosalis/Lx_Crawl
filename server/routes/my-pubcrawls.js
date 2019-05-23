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

// router.post('/visits', isLoggedIn, (req, res, next) => {
//   Visit.create({
//     _user: req.user._id,
//     _streetArt: req.body._streetArt
//   })
//     .then(response => {
//       res.json(response);
//     })
//     .catch(err => {
//       res.json(err);
//     })
// })

// router.delete('/visits/:visitId', isLoggedIn, (req, res, next) => {
// 	console.log("A", req.params.visitId)
//   Visit.findById(req.params.visitId)
//     .then(visit => {
//       if (visit._user.equals(req.user._id)) {
//         Visit.findByIdAndRemove(req.params.visitId)
//           .then(() => {
//             res.json({ message: 'The visit was successfully deleted' });
//           })
//           .catch(err => {
//             res.json(err);
//           })
//       }
//       else {
//         res.json({ message: 'You are NOT ALLOWED to delete this visit' });
//       }
//     })
//     .catch(err => {
//       res.json(err);
//     })
// })

module.exports = router;
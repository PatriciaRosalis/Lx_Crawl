// const express = require('express');
// const PubCrawl = require('../models/PubCrawl');
// const Event = require('../models/Event');
// const { isLoggedIn } = require('../middlewares')
// const router = express.Router();

// // Route protected for logged in user
// router.get('/my-visits', isLoggedIn, (req, res, next) => {
//   Visit.find({ _user: req.user._id }) //Porque queremos o user com aquele id específico
//     .populate("_streetArt") //O populate vai substituir o ObjectId do _streetArt para que sejam apresentadas as features que constituem o _streetArt - a sua lat, a sua lng, e a sua picture. Assim, percebemos que aquele user específico entrou dentro de uma ou várias _streetArt.
//     .then(response => {
//       res.json(response);
//     })
//     .catch(err => {
//       res.json(err);
//     })
// });

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

// module.exports = router;
const mongoose = require('mongoose');

const pubSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
    required: 'Name cannot be blank'
  },
  places: [{
    address: String,
    location: {
      type: String,
      coordinates: [lng,lat],
    },
  }],
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
  timestamps: {
    createdAt: 'createdAt'
  }
});

const PubCrawl = mongoose.model('PubCrawl', pubSchema);

module.exports = PubCrawl;
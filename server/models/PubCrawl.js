const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pubSchema = new mongoose.Schema({
  name: String,
  places: [{
    namePub: String,
    address: String,
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: [Number]
    },
  }],
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: {
    type: String,
    default: " "
  },
  startDate: {
    type: Date,
    default: Date.now,
    required: [true, 'Must have a start date'],
  },
  endDate: {
    type: Date,
    default: Date.now,
    required: [true, 'The End Data is required'],
  },
  participants: {
    type: Number,
    max: 50,
  },
  pictureURL: {
    type: String,
    default: "https://png.pngtree.com/svg/20170817/5f31811e8b.svg"
  }
  // participantName: {
  //   type: [{
  //     type: String,
  //   }]
  // }
}, {
  timestamps: {
    createdAt: 'createdAt'
  }
});

const PubCrawl = mongoose.model('PubCrawl', pubSchema);

module.exports = PubCrawl;
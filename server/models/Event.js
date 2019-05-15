const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '',
    required: 'Title cannot be blank'
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  startDate: {
    type: Date,
    default: Date.now,
    required: [true, 'Must have a start date'],
  },
  endData: {
    type: Date,
    default: Date.now,
    required: [true, 'The End Data is required'],
  },
  participates: {
    type: Number,
    max: 15,
  }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
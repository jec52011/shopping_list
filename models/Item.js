var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  name: {type: String, required: true },
  store: String,
  location: String,
  updated_date: { type: Date, default: Date.now },
  saved_for_later: {type: Boolean, default: false},
  strike: {type: Boolean, default: false },
});

module.exports = mongoose.model('Item', ItemSchema);

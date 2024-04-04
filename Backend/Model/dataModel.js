const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  name: String,
  about: String,
},{timestamps:true});

module.exports = mongoose.model('Data', DataSchema);
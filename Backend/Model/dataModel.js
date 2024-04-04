const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  name: String,
  age: Number,
},{timestamps:true});

module.exports = mongoose.model('Data', DataSchema);
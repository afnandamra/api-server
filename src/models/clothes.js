'use strict';

// DB Dependincy
const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  type: { type: String, required: true },
  color: { type: String },
});

const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;

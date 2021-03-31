'use strict';

// DB Dependincy
const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
  color: { type: String },
  type: { type: String, required: true },
  actor: { type: String, required: true },
  actress: { type: String },
});

const moviesModel = mongoose.model('movies', moviesSchema);

module.exports = moviesModel;

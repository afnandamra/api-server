'use strict';

// Dependincies
const express = require('express');
const router = express.Router();

// validator middleware
const validator = require('../middleware/validator.js');

// model import
const Movie = require('../models/data-collection-class');
const moviesModel = require('../models/movies');
const movies = new Movie(moviesModel);

// route definitions
router.get('/', getMovies);
router.get('/:id', validator, getMoviesById);
router.post('/', createMovies);
router.put('/', validator, updateMovies);
router.put('/:id', validator, updateMovies);
router.delete('/', validator, deleteMovies);
router.delete('/:id', validator, deleteMovies);

// handlers functions
async function getMovies(req, res, next) {
  try {
    const resObj = await movies.read();
    if (resObj.length === 0) {
      res.json('No Data Available');
    } else res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function getMoviesById(req, res, next) {
  try {
    const resObj = await movies.read(req.params.id);
    res.json(resObj[0]);
  } catch (error) {
    next(error);
  }
}

async function createMovies(req, res, next) {
  const moviesObject = req.body;
  try {
    const resObj = await movies.create(moviesObject);
    res.status(201).json(resObj);
  } catch (error) {
    next(error);
  }
}

async function updateMovies(req, res, next) {
  const moviesObject = req.body;
  try {
    const resObj = await movies.update(req.params.id, moviesObject);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function deleteMovies(req, res, next) {
  try {
    const resObj = await movies.delete(req.params.id);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

module.exports = router;

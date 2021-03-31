'use strict';

// Dependincies
const express = require('express');
const router = express.Router();

// validator middleware
const validator = require('../middleware/validator.js');

// model import
const Clothes = require('../models/data-collection-class.js');
const clothesModel = require('../models/clothes.js');
const clothes = new Clothes(clothesModel);

// route definitions
router.get('/', getClothes);
router.get('/:id', validator, getClothesById);
router.post('/', createClothes);
router.put('/', validator, updateClothes);
router.put('/:id', validator, updateClothes);
router.delete('/', validator, deleteClothes);
router.delete('/:id', validator, deleteClothes);

// handlers functions
async function getClothes(req, res, next) {
  try {
    const resObj = await clothes.read();
    if (resObj.length === 0) {
      res.json('No Data Available');
    } else res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function getClothesById(req, res, next) {
  try {
    const resObj = await clothes.read(req.params.id);
    res.json(resObj[0]);
  } catch (error) {
    next(error);
  }
}

async function createClothes(req, res, next) {
  const clothesObject = req.body;
  try {
    const resObj = await clothes.create(clothesObject);
    res.status(201).json(resObj);
  } catch (error) {
    next(error);
  }
}

async function updateClothes(req, res, next) {
  const clothesObject = req.body;
  try {
    const resObj = await clothes.update(req.params.id, clothesObject);
    res.json(resObj);
  } catch (error) {
    next(error);
    // throw new Error(`ID doesn't exist`);
  }
}

async function deleteClothes(req, res, next) {
  try {
    const resObj = await clothes.delete(req.params.id);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

module.exports = router;

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/Item.js');

/* GET ALL ITEMS */
router.get('/', function(req, res, next) {
  Item.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* SAVE ITEM */
router.post('/', function(req, res, next) {
  Item.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE ITEM */
router.put('/:id', function(req, res, next) {
  Item.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE ITEMS */
router.delete('/', function(req, res, next) {
  Item.deleteMany({ strike: true }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

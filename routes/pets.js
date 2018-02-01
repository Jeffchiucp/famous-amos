const express = require('express');
const router = express.Router();

let pets = require('../json/pets')
let comments = require('../json/comments')
const model = require('../db/models/');
const Pet =require('../db/models').Pet

// NEW
router.get('/new', (req, res) => {
  res.render('pets-new');
});

// SHOW
router.get('/:id', (req, res) => {
  model.Pet.findById(req.params.id, {
      include: {
          model: model.Comment
      }
  }).then(pet => {
      res.render('pets-show', { pet: pet });
  });
});


// CREATE
router.post('/', (req, res) => {
    pets.unshift(req.body);
    Pet.create(req.body)

    res.redirect('/');
});

// EDIT
router.get('/:index/edit', (req, res) => {
  res.render('pets-edit', { pet: pets[req.params.index]});
});

// UPDATE
router.put('/:index', (req, res) => {
  //pet model
  res.redirect(`/pets/${req.params.index}`)
});

// DESTROY
router.delete('/:index', (req, res) => {
  res.redirect('/');
});


module.exports = router;

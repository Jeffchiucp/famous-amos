const express = require('express');
const router = express.Router();
let pets = require('../json/pets')
let comments = require('../json/comments')
const model = require('../db/models/');
const Pet =require('../db/models').Pet

// INDEX
router.get('/', (req, res) => {
    Pet.findAll().then((pets) => {res.send(pets);});
});

// NEW
router.get('/new', (req, res) => {
  res.render('pets-new');
});

// SHOW
router.get('/:index', (req, res) => {
  Pet.findById(req.params.index, {
      include: {
          model: model.Comment
      }
  }).then(pet => {
      res.render('pets-show', { pet:pet });
  });
});

// CREATE
router.post('/', (req, res) => {
    Pet.create(req.body);
    res.redirect('/');
});

// EDIT
router.get('/:index/edit', (req, res) => {
    Pet.findById(req.params.index).then(pet => {
        res.render('pets-edit', { pet:pet });
    });
});

// UPDATE
router.put('/:index', (req, res) => {
    Pet.findById(req.params.index).then(pet => {
        console.log(pet)
        return pet.update(req.body);
    }).then((pet) => {
        console.log(pet)
        res.redirect(`/pets/${req.params.index}`);
    }).catch((err) => {
        res.send(err);
    });
});

// DESTROY
router.delete('/:index', (req, res) => {
    Pet.findById(req.params.petId).then(pet => {
      console.log(pet)
      return pet.destroy();
  }).then(() => {
      res.redirect('/');
  }).catch((err) => {
      res.send(err);
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
let pets = require('../json/pets')
let comments = require('../json/comments')
const model = require('../db/models/');
const Pet =require('../db/models').Pet
const Comment = require('../db/models').Comment

// INDEX
router.get('/', (req, res) => {
    Pet.findAll().then((pets) => {res.send(pets);});
});

// NEW
router.get('/new', (req, res) => {
  res.render('pets-new');
});

// SHOW
// TODO fix all of the index to id
router.get('/:index', (req, res) => {
  Pet.findById(req.params.index, {
      include: {
          model: Comment
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
// TODO fix all of the index to id
router.get('/:index/edit', (req, res) => {
    Pet.findById(req.params.index).then(pet => {
        res.render('pets-edit', { pet:pet });
    });
});

// UPDATE
// TODO fix all of the index to id
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
    Pet.findById(req.params.index).then((pet) => {
        pet.destroy(pet);
    }).then(() => {
        req.flash('success', 'Successfully Deleted Pet')
        res.redirect('/');
    }).catch((err) => {
        req.flash('caution', 'Something went wrong')
        console.log(err)
    })
});


module.exports = router;

const express = require('express');
const router = express.Router({mergeParams: true});
const model = require('../db/models/');
let comments = require('../json/comments')

// CREATE
// flash Source code based on the tutorial from Web3
router.post('/', (req, res) => {
    req.body.petId = req.params.petId;
    model.Comment.create({
          content: req.body.content,
          PetId: req.params.petId
    }).then(() => {
      req.flash('success', 'Comment is posted');
      res.redirect(`/pets/${req.params.petId}`);
    }).catch((err) => {
    req.flash('error', 'Oops! something went wrong');
    res.redirect(`/pets/${req.params.petId}`);
  });
});
// DESTROY
// FLASH Source code based on the tutorial from Web3

router.delete('/:id', (req, res) => {
    model.Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
      req.flash('success', 'Comment is deleted');
      res.redirect(`/pets/${req.params.petId}`);
    }).catch((err) => {
      req.flash('error', 'Oops! something went wrong');
      res.redirect(`/pets/${req.params.petId}`);
    });
});

module.exports = router;

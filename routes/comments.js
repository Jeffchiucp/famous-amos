const express = require('express');
const router = express.Router({mergeParams: true});
const model = require('../db/models/');
let comments = require('../json/comments')

// CREATE
router.post('/', (req, res) => {
    req.body.petId = req.params.petId;

    model.Comment.create(req.body);

    res.redirect(`/pets/${req.params.petId}`);
});

router.delete('/:id', (req, res) => {
    model.Comment.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect(`/pets/${req.params.petId}`);
});

module.exports = router;

const express = require('express');
const router = express.Router();

let pets = require('../json/pets')
const model = require('../db/models/');

/* GET home page. */
router.get('/', (req, res) => {
  model.Pet.findAll().then(pets => {
    res.render('pets-index', { pets: pets });
  })
});

module.exports = router;

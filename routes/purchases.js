const express = require('express')
const router = express.Router()

let pets = require('../json/pets')
let comments = require('../json/comments')
var stripe = require("stripe")(process.env.stripeTestSecretKey)

// NEW
router.get('/pets/:petId/purchase', (req, res) => {
  res.render('purchase-new', { pet: pets[req.params.petId]})
})

// CREATE
//Web 3 tutorial on Stripe --
//https://github.com/Jeffchiucp/WEB-3-Advanced-Web-Patterns/
//tree/master/11.%20Payment%20Gateways
router.post('/pets/:petId/purchase', (req, res) => {

  stripe.charges.create({
    amount: pets[req.params.petId].priceInCents,
    currency: "usd",
    source: req.body.stripeToken.id, // Using Strip API
    description: "Charge for this amount"
  }, function(err, charge) {
    if (err) { return console.log(err) }

    pets[req.params.petId].purchasedAt = new Date();
    res.send("success!")
  });
})

module.exports = router

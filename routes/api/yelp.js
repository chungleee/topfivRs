const express = require('express')
const router = express.Router()
const passport = require('passport')
const { yelpApiKey } = require('../../config/keys')
const yelp = require('yelp-fusion')

// user model
const User = require('../../models/User')

// yelp authentication 
const client = yelp.client(yelpApiKey)

// @route   GET /api/yelp/test
// @desc    Test yelp private route
// @access  Private
router.get('/test', passport.authenticate('jwt', {session:false}), (req, res) => {
  res.json(req.user)
})

module.exports = router
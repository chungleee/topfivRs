const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

// Load user model
const User = require('../../models/User')

// @route   GET /api/users/test
// @desc    Test the api users test route
// @access  Public
router.get('/test', (req, res) => {
  res.json({msg: 'success'})
})

// @route   POST /api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  // destructure from client form field
  const { username, email, password } = req.body
  // check if user already exists by email
  User
    .findOne({email})
    .then((user) => {
      if(user) {
        return res.status(400).json({error: 'Email already exists'})
      }
      const newUser = new User({
        username, email, password
      })
      // password hashing
      // gen salt
      bcrypt.genSalt(10, (err, salt) => {
        // hash
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err
          newUser.password = hash
          newUser
            .save()
            .then((user) => {
              res.json(user)
            })
            .catch((err) => {
              console.log(err)
            })
        })
      })
    })
})

module.exports = router
const express = require('express')
const router = express.Router()

// @route   GET /api/users/test
// @desc    Test the api users test route
// @access  Public
router.get('/test', (req, res) => {
  res.json({msg: 'success'})
})

module.exports = router
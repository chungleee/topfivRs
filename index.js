const express = require('express')
const mongoose = require('mongoose')
const { mongoURI } = require('./config/keys')

const app = express()

// mongoose connection
mongoose
  .connect(mongoURI)
  .then(console.log('*****Mongoose connected*****'))

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
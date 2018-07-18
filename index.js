const express = require('express')
const mongoose = require('mongoose')
const { mongoURI } = require('./config/keys')

// load routes
const users = require('./routes/api/users')

const app = express()

// middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// router
app.use('/api/users', users)

// mongoose connection
mongoose
  .connect(mongoURI, {useNewUrlParser:true})
  .then(console.log('*****Mongoose connected*****'))
  .catch(err => console.log(err))

// local server
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
// Require all of the dependencies
// Require express to set up the server
const express = require('express')
// Require mongoose to be used as the ORM
const mongoose = require('mongoose')
// Require the routes
const routes = require('./routes')

// Initialize the app
const app = express()
// Set the port for production or development
const PORT = process.env.PORT || 3001

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Add routes, both API and view
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks')

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
)

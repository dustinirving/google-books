// Require the dependencies
// Used to make the path relative rather than absolute
const path = require('path')
// Require router to set up the routing
const router = require('express').Router()
// Require the api routes
const apiRoutes = require('./api')

// API Routes
router.use('/api', apiRoutes)

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
)

module.exports = router

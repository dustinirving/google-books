// Require all the dependencies
// Path used to make the path relative rather than absolute
const path = require('path')
// Require router to set up all of the routes
const router = require('express').Router()
// Require the bookRoutes and googleRoutes
const bookRoutes = require('./books')
const googleRoutes = require('./google')

// Book routes
router.use('/books', bookRoutes)

// Google Routes
router.use('/google', googleRoutes)

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'))
})

module.exports = router

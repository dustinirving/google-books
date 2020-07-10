// Require the router to set up the routes
const router = require('express').Router()
// Require the google Controller to make use of the mehthods for querying the database
const googleController = require('../../controllers/googleController')

// Matches with "/api/google"
router.route('/').get(googleController.findAll)

module.exports = router

// Require the router to set up the routing
const router = require('express').Router()
// Require the controller to pull in the database querying
const bookController = require('../../controllers/bookController')

// Full route is "/api/books"
router
  .route('/')
  .get(bookController.findAll)
  .post(bookController.create)

// Full route is "/api/books/:id"
router
  .route('/:id')
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove)

// Export the router
module.exports = router

const db = require('../models')

// Defining methods for the bookController
module.exports = {
  // Retrieve all the books that match the query
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err))
  },
  // Retrieve a specific book with an id
  findById: function (req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err))
  },
  // Create a new book
  create: function (req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err))
  },
  // Update a book with the req.body
  update: function (req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err))
  },
  // Remove a book
  remove: function (req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err))
  }
}

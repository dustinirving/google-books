// Require mongoose to defing the schema for a book
const mongoose = require('mongoose')
// Initialize a Schema
const Schema = mongoose.Schema

// Define all the properties for the schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
})

// Assign a variable to the Book model
const Book = mongoose.model('Book', bookSchema)

// Export Book
module.exports = Book

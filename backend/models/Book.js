const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  description: {
    type: String,
  },
  publishedYear: {
    type: Number,
  },
  rating: {
    type: Number,
    default: 0,
  },
  coverImage: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);


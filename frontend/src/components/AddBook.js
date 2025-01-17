import React, { useState } from 'react';
import { addBook } from '../services/bookService';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    publishedYear: '',
    rating: '',
    coverImage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook(formData);
      alert('Book added successfully!');
      setFormData({
        title: '',
        author: '',
        genre: '',
        description: '',
        publishedYear: '',
        rating: '',
        coverImage: '',
      });
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add the book.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>

      <input
        type="number"
        name="publishedYear"
        placeholder="Published Year"
        value={formData.publishedYear}
        onChange={handleChange}
      />

      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={formData.rating}
        onChange={handleChange}
        step="0.1"
        min="0"
        max="5"
      />

      <input
        type="text"
        name="coverImage"
        placeholder="Cover Image URL"
        value={formData.coverImage}
        onChange={handleChange}
      />

      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;


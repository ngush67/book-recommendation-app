import React from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  return (
    <div>
      <h1>📚 Book Recommendation App</h1>
      <AddBook />
      <BookList />
    </div>
  );
}

export default App;


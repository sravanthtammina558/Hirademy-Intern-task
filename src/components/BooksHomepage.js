import React from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import './style.css'

function BooksHomepage() {
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  const { data: books, error } = useSWR('https://softwium.com/api/books', fetcher);
  if (!books) return <div>Loading...</div>;
  if (error) return <div>Error fetching books: {error.message}</div>;
  return (
    <div className="container">
      <h1>Books Page</h1>
      <ul className="books-container">
        {books.map(book => (
          <li className="book-item" key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksHomepage;
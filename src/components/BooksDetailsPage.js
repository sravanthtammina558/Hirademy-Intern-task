import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import './style.css'
function BookDetailsPage() {
  const { id } = useParams();
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  const { data: book, error } = useSWR(`https://softwium.com/api/books/${id}`, fetcher);
  if (!book) return <div>Loading...</div>;
  if (error) return <div>Error fetching book details: {error.message}</div>;
  return (
    <div className="container book-details">
      <h1>Book Details</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>ISBN</th>
            <th>Page Count</th>
            <th>Authors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{book.title}</td>
            <td>{book.isbn}</td>
            <td>{book.pageCount}</td>
            <td>{book.authors.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BookDetailsPage;
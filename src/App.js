import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BooksHomepage from './components/BooksHomepage';
import BookDetailsPage from './components/BooksDetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BooksHomepage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/books" element={<BooksHomepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

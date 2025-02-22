import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

function ShowBookList() {

  let [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('/books')
      .then(res => {
        setBooks(res.data);
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  }, []);

  let bookList;

  if(books.length === 0) {
    bookList = <div className="list-msg">ℹ️ No books added. Click the 'Add New Book' button to add one.</div>;
  }
  else {
    bookList = books.map((book, k) =>
      <BookCard book={book} key={k} />
    );
  }

  return (
    <div className="ShowBookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Book List</h2>
          </div>

          <div className="col-md-11">
            <Link to="/create-book" className="btn btn-outline-warning float-right">
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>

        </div>

        <div className="list">
              {bookList}
        </div>
      </div>
    </div>
  );
}

export default ShowBookList;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadedBooks } from 'actions';
import './Books.scss';

// COMPONENTS
import Book from './components/Book/Book.js';
import AddBookForm from './components/AddBookForm/AddBookForm.js';

function Books() {
  const isAddingBook = useSelector(state => state.isAddingBook);
  const dispatch = useDispatch();

  const books = useSelector(state => state.books);
  useEffect(() => {
    if (books.length === 0) {
      fetch('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep')
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.items);
        dispatch(loadedBooks(data.items));
      });

    }
  }, [books, dispatch]);

  const search = useSelector(state => state.search);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (!search) {
      setSearchResults(books);
    } else {
        let newResults = books.filter(book => {
          const volumeInfo = book.volumeInfo;
          const searchExpression = new RegExp(search, 'ig');
          if ( volumeInfo.title.match(searchExpression)
            || volumeInfo.authors.join(' ').match(searchExpression)
          ) {
            return book
          } else {
            return false
          }
        })

        setSearchResults(newResults);
    }
  }, [books, search])

  function viewHandler() {
    if (isAddingBook) {
      return <AddBookForm/>
    } else if (books.length > 0 && searchResults.length === 0) {
      return <p>No books found</p>
    } else {
      return (
        <article id="books">
          {searchResults.map(book => {
            return <Book key={book.id} id={book.id} bookInfo={book}/>
          })}
        </article>
      )
    }
  }

  return (
    <main>
      <h2>All Books</h2>
      {viewHandler()}
    </main>
  );
}

export default Books;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookAdded, addingBook } from 'actions';

const defaults = {
  title: '',
  authors: '',
  subtitle: '',
  publishedDate: '',
  imageLinks: {}
}

function AddBookForm() {
  const [book, setBook] = useState(defaults);
  const numBooks = useSelector(state => state.books.length);
  const dispatch = useDispatch();

  function handleChange(e) {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    })
  }

  function addBook() {
    dispatch(bookAdded({
      id: numBooks,
      volumeInfo: {
        ...book,
        authors: [book.authors]
      }
    }));
    setBook(defaults);
  }

  return (
    <article id="add-book-form">
      <section className="input-row">
        <label htmlFor="title">Title:</label>
        <input name="title" value={book.title} onChange={handleChange} />
      </section>

      <section className="input-row">
        <label htmlFor="authors">Authors:</label>
        <input name="authors" value={book.authors} onChange={handleChange} />
      </section>

      <section className="input-row">
        <label htmlFor="subtitle">Sub title:</label>
        <input name="subtitle" value={book.subtitle} onChange={handleChange} />
      </section>

      <section className="input-row">
        <label htmlFor="publishedDate">Published Date:</label>
        <input name="publishedDate" value={book.publishedDate} onChange={handleChange} />
      </section>

      <button onClick={addBook}>Add Book</button>
      <button className="button--cancel" onClick={() => dispatch(addingBook(false))}>Cancel</button>
    </article>
  )
}

export default AddBookForm;

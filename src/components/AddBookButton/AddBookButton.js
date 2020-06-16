import React from 'react';
import './AddBookButton.scss';
import { useDispatch } from 'react-redux';
import { addingBook } from 'actions';

function AddBookButton() {
  const dispatch = useDispatch();
  return <button className="button--header" onClick={() => dispatch(addingBook(true))}>Create New Book</button>
}

export default AddBookButton;

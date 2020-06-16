import React from 'react';
import './SearchBar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { searchBooks } from 'actions';

function SearchBar() {
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();

  function handleSearchChange(e) {
    dispatch(searchBooks(e.target.value))
  }

  return <input
    id="search-bar"
    placeholder="Search"
    value={search}
    onChange={handleSearchChange}/>
}

export default SearchBar;

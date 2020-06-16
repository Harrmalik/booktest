import React from 'react';
import './App.scss';
import store from './store.js';
import { Provider } from 'react-redux';

// COMPONENTS
import AddBookButton from './components/AddBookButton';
import SearchBar from './components/SearchBar';
import Books from './components/Books';

function App() {
  return (
    <Provider store={store}>
      <h1>Books</h1>                                          <AddBookButton/>
      <SearchBar/>

      <Books/>
    </Provider>
  );
}

export default App;

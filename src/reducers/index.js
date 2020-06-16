import { combineReducers } from 'redux';

function books (state = [], action) {
    switch (action.type) {
        case 'LOADED_BOOKS':
            return action.books;

        case 'BOOK_ADDED':
            return [...state, action.book];

        default:
            return state
    }
}

function search (state = '', action) {
    switch (action.type) {
        case 'SEARCH':
          return action.searchValue

        default:
            return state
    }
}

function isAddingBook (state = false, action) {
    switch (action.type) {
        case 'ADDING_BOOK':
          return action.isAddingBook

        case 'BOOK_ADDED':
          return false

        default:
            return state
    }
}

const rootReducer = combineReducers({
    books,
    search,
    isAddingBook
})

export default rootReducer

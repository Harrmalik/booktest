// Socket Actions
export const loadedBooks = (books) => ({
    type: 'LOADED_BOOKS',
    books
})

export const addingBook = (isAddingBook) => ({
  type: 'ADDING_BOOK',
  isAddingBook
})

export const bookAdded = (book) => ({
    type: 'BOOK_ADDED',
    book
})

export const searchBooks = (searchValue) => ({
    type: 'SEARCH',
    searchValue
})

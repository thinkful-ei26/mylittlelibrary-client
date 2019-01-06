export const ADD_BOOK = 'ADD_BOOK'

export function addBook(title, author, status, isbn, genre) {
  return {
    type: ADD_BOOK,
   title,
   author,
   status,
   isbn,
   genre
  }
}


export const UPDATE_BOOK = 'UPDATE_BOOK'

export function updateBook(title, author, status, isbn, genre) {
  return {
    type: UPDATE_BOOK,
    title,
    author,
    status,
    isbn,
    genre
  }
}

export const DELETE_BOOK = 'DELETE_BOOK'

export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    id
  }
}
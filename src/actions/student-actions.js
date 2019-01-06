export const SELECT_BOOK = 'SELECT_BOOK'

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    book
  }
}

export const SEARCH_BOOK = 'SEARCH_BOOK'

export function searchBook(book) {
  return {
    type: SEARCH_BOOK,
    book
  }
}
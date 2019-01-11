import React from 'react';
import { API_BASE_URL } from '../config';
import './css/main-view.css';
// console.log(API_BASE_URL)

export default class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: null,
      loading: false,
      text: '',
      query:''
    };
  }
  onSubmit(event) {
    event.preventDefault();
    let select = this.searchFields.value;
    const query = this.textInput.value.trim();
    this.setState({ query });
    this.textInput.value = '';
    let field = '';
    if (select === 'author') {
      field = 'author';
    } else if (select === 'title') {
      field = 'title';
    } else {
      field = 'genre';
    }

    return fetch(`${API_BASE_URL}/books?${field}=${query}`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(books => {
        this.setState({
          books: books,
          loading: false
        });
      })
      .catch(err =>
        this.setState({
          error: 'Could not load books',
          loading: false
        })
      );
  }

  render() {
    const bookList = this.state.books;
    let bookListElement;
    if(bookList.length ===  0){
     bookListElement = 'Sorry, we couldn\'t find that item  ';
    }else{
     bookListElement = bookList.map((book, index) => (
      <section key={index} className="search-result">
        <fieldset>
          <legend>Search Results</legend>
          <ul>
            <li>
              <strong>{book.title}</strong>
            </li>
            <li>By {book.author}</li>
            <li>Status: {book.status}</li>
            <li>ID: {book.id}</li>
          </ul>
        </fieldset>
      </section>
    ));
    }

    return (
      <div>
        <section className="searchbar">
          <fieldset>
            <legend>Catalog Quick Search</legend>
            <form className="searchform" onSubmit={e => this.onSubmit(e)}>
              <select
                name="search-fields"
                ref={select => (this.searchFields = select)}
                id="search-fields"
              >
                <option value="author">Author</option>
                <option value="title">Title</option>
                <option value="genre">Genre</option>
              </select>
              <input type="text" ref={input => (this.textInput = input)} />
              <button>Search</button>
            </form>
          </fieldset>
        </section>
        <div className="outputarea">{bookListElement}</div>
      </div>
    );
  }
}

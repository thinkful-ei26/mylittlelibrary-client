import React from 'react';
import { API_BASE_URL } from '../config';
import './css/main-view.css';

export default class MainView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      error: null,
      loading: false,
      text: ''
    };
  }

  componentWillMount() {
    this.loadBooks();
  }

  onSubmit(event) {
    event.preventDefault();
    const title = this.textInput.value.trim();
    this.setState({ title });
    this.textInput.value = '';
    console.log('LOGGING title', title);

    return fetch(`${API_BASE_URL}/books?title=${title}`)
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

  // onClick(event) {
  //   event.preventDefault();
  //   const title = this.titleInput.value.trim();
  //   this.setState({title});
  //  console.log('LOGGING title', title);
  // }

  loadBooks() {
    this.setState({
      error: null,
      loading: true
    });

    // return fetch(`${API_BASE_URL}/books`)
    //   .then(res => {
    //     if (!res.ok) {
    //       return Promise.reject(res.statusText);
    //     }
    //     return res.json();
    //   })
    //   .then(books => {
    //     this.setState({
    //       books: books,
    //       loading: false
    //     });
    //   })
    //   .catch(err =>
    //     this.setState({
    //       error: 'Could not load books',
    //       loading: false
    //     })
    //   );

    /**********************TEST FETCH */
    return fetch(`${API_BASE_URL}/books?title=title`)
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
  // generateBookList() {
  //   const bookList = fetch(`${API_BASE_URL}/books`);
  // }

  render() {
    console.log(this.state);
    const bookList = this.state.books;
    const bookListElement = bookList.map((book, index) => (
      <section key="{index}" className="search-result">
        <fieldset>
          <legend>Search Results</legend>
          <ul>
            <li><strong>{book.title}</strong></li>
            <li>By {book.author}</li>
            <li>Status: {book.status}</li>
          </ul>
          <div className="search-result-buttons">
            <p>
              <button>Details</button>{' '}
            </p>
            <p>
              <button>
                {' '}
                <a href="login.html">Hold</a>
              </button>
            </p>
          </div>
        </fieldset>
      </section>
    ));
    return (
      <div>
        <section className="searchbar">
          <fieldset>
            <legend>Catalog Quick Search</legend>
            <form className="searchform" onSubmit={e => this.onSubmit(e)}>
              <select name="search-fields" id="search-fields">
                <option value="All Fields">All Fields</option>
                <option value="Author">Author</option>
                <option value="Title">Title</option>
                <option value="Subject">Subject</option>
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

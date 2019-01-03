import React from 'react';
import { API_BASE_URL } from '../config';

export default class MainView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      error: null,
      loading: false,
      text: '',
      title:''
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
    console.log('LOGGING title',title)
  
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
      <section key={index}>
        <ul>
          <li>{book.title}</li>
          <li>{book.author}</li>
        </ul>
        <button>Details</button>{' '}
        <button>
          {' '}
          <a href="login.html">Hold</a>
        </button>
      </section>
    ));
    return (
      <div>
        <section className="searchbar">
          <h3>Catalog Quick Search</h3>
          <form className="searchform" onSubmit={e => this.onSubmit(e)}>
            <select name="serach fields" id="search-fields">
              <option value="All Fields">All Fields</option>
              <option value="Author">Author</option>
              <option value="Title">Title</option>
              <option value="Subject">Subject</option>
            </select>
            <input type="text" ref={input => (this.textInput = input)} />
            <button>Search</button>
          </form>
        </section>
        <div className="outputarea">{bookListElement}</div>
      </div>
    );
  }
}

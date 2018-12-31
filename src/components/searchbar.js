import React from 'react';
import { API_BASE_URL } from '../config';
import SearchResult from './search-result';
import './searchbar.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // lists: [],
      error: null,
      loading: false
    };
  }
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    this.setState({
      error: null,
      loading: true
    });
    return fetch(`${API_BASE_URL}/books`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(books => {
        console.log('Logging here',books);
          this.setState({
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
    return (
      <div>
      <section className="searchbar">
        <h3>Catalog Quick Search</h3>
        <form className="searchform" action="">
          <select name="serach fields" id="search-fields">
            <option value="All Fields">All Fields</option>
            <option value="Author">Author</option>
            <option value="Title">Title</option>
            <option value="Subject">Subject</option>
          </select>
          <input type="text" />
          <button>Search</button>
        </form>
      </section>
      <SearchResult>
        books 
      </SearchResult>
        </div>
    );
  }
}

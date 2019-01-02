import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { API_BASE_URL } from '../config';
import StudentView from './student-view';


export default class  MainView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books:[],
      error: null,
      loading: false,
      text:''
    };
  }
  componentWillMount() {
    this.loadBooks();
    // this.generateBookList();
  }

   onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        // console.log(text);
        this.setState({text})
        this.textInput.value = '';
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
  generateBookList(){
const bookList = fetch(`${API_BASE_URL}/books`)
// console.log('generateBooklist LOGGING', bookList.books);
}

  render() {
    // console.log('LOGGING',this.state.books)
    const bookList = this.state.books;
    const bookListElement = bookList.map((book, index) =>(
  
 
    <section key={index}>
  
      <ul>
        <li>{book.title}</li>
        <li>{book.author}</li>
      </ul>
   
  
      <button>Details</button> <button> <a href="login.html">Hold</a></button>
 </section>
    )
   
    )
    // console.log('LOG STATE',this.state.text)
    // console.log('bookListElement',bookListElement)
    return (
       <BrowserRouter>
      <div>
      <section className="searchbar">
        <h3>Catalog Quick Search</h3>
        <form className="searchform" onSubmit={(e)=>this.onSubmit(e)} >
          <select name="serach fields" id="search-fields">
            <option value="All Fields">All Fields</option>
            <option value="Author">Author</option>
            <option value="Title">Title</option>
            <option value="Subject">Subject</option>
          </select>
          <input type="text" ref={input => this.textInput=input} />
          <button>Search</button>
        </form>
      
      </section>
        <div className="outputarea">
          { bookListElement}
        </div>
      
        </div>
          </BrowserRouter>
    );
  }
  
  }


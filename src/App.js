import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
  <body>
    <header>
      <nav>
      <div className="libraryinformation"><a href="#">Library Information</a></div>
        <h1>My Little Library</h1>
        
      </nav>
    </header>
    <section className="searchbar">
      <form className="searchform" action="">
        <select name="serach fields" id="search-fields">
            <option value="All Fields">All Fields</option>
            <option value="Author">Author</option>
            <option value="Title">Title</option>
            <option value="Subject">Subject</option>
        </select>
        <input type="text"/>
        <button>Search</button>
      </form>
    </section>
       <div className="outputarea">
        test output here

    </div>
  </body>
</div>
    );
  }
}

export default App;

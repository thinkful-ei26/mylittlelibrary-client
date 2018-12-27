import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResult from './components/search-result';
import SearchBar from './components/searchbar';
import LibraryInformation from './components/library-information';

class App extends Component {
  constructor(props) {
    this.state = {
      display_library_information: false
    };
  }
  onSubmit(event) {
    event.preventDefault();
  }
  setDisplay(display_library_information) {
    this.setState({
      display_library_information
    });
  }

  render() {



    
    return (
      <div>
        <body>
          <header>
            <nav>
              <div className="libraryinformation">
                <a href="#">Library Information</a>
                <div className="library-information-bubble" />
              </div>
              <h1>My Little Library</h1>
            </nav>
          </header>
          <SearchBar />
          <SearchResult />
        </body>
      </div>
    );
  }
}

export default App;

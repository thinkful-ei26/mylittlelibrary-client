import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResult from './components/search-result';
import SearchBar from './components/searchbar';
import LibraryInformation from './components/library-information';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: false
    };
  }
  onClick(event) {
    event.preventDefault();
  }
  setDisplay(displayInfo) {
    this.setState({
      displayInfo
    });
  }

  render() {
    if (this.state.displayInfo) {
      return(
        <div>
        <body>
          <header>
            <nav>
              <div className="libraryinformation">
                <button onClick={() => this.setDisplay(true)}>
                 <a href=""> Library Information</a>
                </button>
                <div className="library-information-bubble" />
                <LibraryInformation/>
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

    return (
      <div>
        <body>
          <header>
            <nav>
              <div className="libraryinformation">
                <button onClick={() => this.setDisplay(true)}>
                  Library Information
                </button>
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

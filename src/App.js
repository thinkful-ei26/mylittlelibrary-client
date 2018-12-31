import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchbar';
import LibraryInformation from './components/library-information';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     displayInfo: false
  //   };
  // }
  // onClick(event) {
  //   event.preventDefault();
  // }
  // setDisplay(displayInfo) {
  //   this.setState({
  //     displayInfo
  //   });
  // }

  render() {
      return (
        <div>
          <body>
            <Header />
            <SearchBar />
            <Footer />
          </body>
        </div>
      );
    

   
}
}

export default App;

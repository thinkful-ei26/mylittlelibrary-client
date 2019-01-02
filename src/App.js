import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import MainView from './components/main-view';
import LibraryInformation from './components/library-information';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {

  render() {
      return (
        <BrowserRouter>
        <div>
            <Header />
            <MainView />
            <Footer />
        </div>
        </BrowserRouter>
      );
}
}

export default App;

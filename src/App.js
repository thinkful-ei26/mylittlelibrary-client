import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MainView from './components/main-view';
import Header from './components/header';
import Footer from './components/footer';
import StaffView from './components/staff-view'
import EditView from './components/edit-view'
import {AddViewInput} from './components/add-view-input'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/staff-view" component={StaffView} />
          <Route exact path="/" component={MainView}/>
          <Route exact path="/edit-view" component={EditView}/>
          <Route exact path="/add-view" component={AddViewInput}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

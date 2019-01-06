import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MainView from './components/main-view';
import Header from './components/header';
import Footer from './components/footer';
import StaffView from './components/staff-view';
import { EditViewInput } from './components/edit-view-input';
import { AddViewInput } from './components/add-view-input';
import { DeleteViewInput } from './components/delete-view-input';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/staff-view" component={StaffView} />
          <Route exact path="/" component={MainView} />
          <Route exact path="/edit-view" component={EditViewInput} />
          <Route exact path="/add-view" component={AddViewInput} />
          <Route exact path="/delete-view" component={DeleteViewInput} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

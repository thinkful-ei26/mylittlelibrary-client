import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import MainView from './components/main-view';
import Header from './components/header';
import Footer from './components/footer';
import StaffView from './components/staff-view';
import { EditViewInput } from './components/edit-view-input';
import { AddViewInput } from './components/add-view-input';
import { DeleteViewInput } from './components/delete-view-input';
/*NEW REGISTRATION RELATED*/
import LoginForm from './components/login-form';
import Dashboard from './components/dashboard';
import RegistrationPage from './components/registration-page';
import { refreshAuthToken } from './actions/auth';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }
  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      15 * 60 * 1000
    );
  }
  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/staff-view" component={StaffView} />
        <Route exact path="/" component={MainView} />
        <Route exact path="/edit-view" component={EditViewInput} />
        <Route exact path="/add-view" component={AddViewInput} />
        <Route exact path="/delete-view" component={DeleteViewInput} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/login" component={LoginForm} />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// export default App;
export default withRouter(connect(mapStateToProps)(App));

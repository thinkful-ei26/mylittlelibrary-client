import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
// import {Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password))
    //if login succesful render staff-view.js
    .then(success=>{
        // return <Redirect to='/staff-view' />; 
        // console.log('LOG',success)
        this.props.history.push("/staff-view");
    })
    .catch( err=> 'no go')
   
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <div>
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          {error}
          <label htmlFor="username">Username</label>
          <Field
            component={Input}
            type="text"
            name="username"
            id="username"
            validate={[required, nonEmpty]}
          />
          <label htmlFor="password">Password</label>
          <Field
            component={Input}
            type="password"
            name="password"
            id="password"
            validate={[required, nonEmpty]}
          />

          <button disabled={this.props.pristine || this.props.submitting}>
            Log in
          </button>
        </form>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}
export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);

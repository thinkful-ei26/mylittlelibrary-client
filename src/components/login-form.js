import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import './css/login-form.css';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return (
      this.props
        .dispatch(login(values.username, values.password))
        .then(success => {
          this.props.history.push('/staff-view');
        })
    );
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
           
              <Field
              label="Username"
                component={Input}
                type="text"
                name="username"
                id="username"
                validate={[required, nonEmpty]}
              />
      
          
              <Field
              label="Password"
                component={Input}
                type="password"
                name="password"
                id="password"
                validate={[required, nonEmpty]}
              />
            

          <button
            className="login-form-button"
            disabled={this.props.pristine || this.props.submitting}
          >
            Log in
          </button>
        </form>
        <Link to="/register">
          <button className="login-form-register">Register New User</button>
        </Link>
      </div>
    );
  }
}
export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);

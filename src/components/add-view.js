import React from 'react';
import { API_BASE_URL } from '../config';
import { reduxForm, Field, SubmissionError, focus, reset } from 'redux-form';
import './css/add-edit.css';
import './css/result-message.css';
import { required, nonEmpty } from '../validators';
import Input from './input';
import BackToStaffView from './return-to-staff-view';

export class AddView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: 'default'
    };
  }

  onSubmit(values) {
    return fetch(`${API_BASE_URL}/books`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
          ) {
            return res.json().then(err => Promise.reject(err));
          }
          return Promise.reject({
            code: res.status,
            message: res.statusText
          });
        }
        console.log('Test string')
        this.props.dispatch(reset('add-view'));

        return;
      })
      .then(
        () => console.log('Submitted with values', values),
        this.setState({ success: 'success' })
      )
      .catch(err => {
        const { reason, message, location } = err;
        if (reason === 'ValidationError') {
          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          );
        }
        return Promise.reject(
          new SubmissionError({
            _error: 'Error submitting message'
          })
        );
      });
  }

  render() {
    let resultMessage = '';
    this.state.success === 'success'
      ? (resultMessage = 'Item has been added')
      : (resultMessage = '');

    return (
      <div class="add-view">
        <h2> Staff Add View</h2>
        <fieldset>
          <legend>Add Books to catalog</legend>
          <form
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
            className="staff-crud-form"
          >
            <Field
              name="title"
              id="title"
              type="text"
              component={Input}
              label="Title"
              validate={[required, nonEmpty]}
            />
            <Field
              name="author"
              id="author"
              type="text"
              component={Input}
              label="Author"
              validate={[required, nonEmpty]}
            />
            <Field
              name="genre"
              id="genre"
              type="text"
              component={Input}
              label="Genre"
              validate={[required, nonEmpty]}
            />
            <Field
              name="summary"
              id="summary"
              type="text"
              component={Input}
              label="Summary"
            />
            <Field
              name="isbn"
              id="isbn"
              type="text"
              component={Input}
              label="ISBN"
              validate={[required, nonEmpty]}
            />
            <Field
              name="status"
              id="status"
              type="text"
              component={Input}
              label="Status"
              validate={[required, nonEmpty]}
            />
            <div className="result-message">{resultMessage}</div>
            <div className="button-pack">
              <button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
              >
                Add Item to Catalog
              </button>
              <BackToStaffView />
            </div>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default reduxForm({
  form: 'add-view',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('contact', Object.keys(errors)[0]))
})(AddView);

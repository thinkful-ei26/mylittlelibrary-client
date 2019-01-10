import React from 'react';
import { API_BASE_URL } from '../config';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import './css/add-edit.css';
import './css/result-message.css'
import Input from './input';
import BackToStaffView from './return-to-staff-view';
import { reset } from 'redux-form';

export class EditView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: 'default'
    };
  }

  onSubmit(values) {
    // console.log('LOG VALUES', values.id);
    const id = values.id;
    const data = {
      title: values.title,
      author: values.author,
      genre: values.genre,
      summary: values.summary,
      isbn: values.isbn,
      status: values.status
    };
    console.log('LOG data', data);
    return fetch(`${API_BASE_URL}/books/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
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
         this.props.dispatch(reset('edit-view'));
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
      ? (resultMessage = 'Item has been updated')
      : (resultMessage = '');
    return (
      <div>
        <h2> Staff Edit View</h2>
        <fieldset>
          <legend>Edit Books to catalog</legend>
          <form
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
            className="staff-crud-form"
          >
            <Field
              name="id"
              id="id"
              type="text"
              component={Input}
              label="id"
              // validate={[required, nonEmpty]}
            />
            <Field
              name="title"
              id="title"
              type="text"
              component={Input}
              label="Title"
              // validate={[required, nonEmpty]}
            />
            <Field
              name="author"
              id="author"
              type="text"
              component={Input}
              label="Author"
              // validate={[required, nonEmpty]}
            />
            <Field
              name="genre"
              id="genre"
              type="text"
              component={Input}
              label="Genre"
              // validate={[required, nonEmpty]}
            />
            <Field
              name="summary"
              id="summary"
              type="text"
              component={Input}
              label="Summary"
              //   validate={[required, nonEmpty]}
            />
            <Field
              name="isbn"
              id="isbn"
              type="text"
              component={Input}
              label="ISBN"
              // validate={[required, nonEmpty]}
            />
            <Field
              name="status"
              id="status"
              type="text"
              component={Input}
              label="Status"
              // validate={[required, nonEmpty]}
            />
            <div className="result-message">{resultMessage}</div>
             <div className="button-pack">
              <button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
              >
                Update Book Information 
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
  form: 'edit-view',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('contact', Object.keys(errors)[0]))
})(EditView);

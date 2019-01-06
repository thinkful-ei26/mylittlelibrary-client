import React from 'react';
import { API_BASE_URL } from '../config';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import './css/add-edit.css';
import { required, nonEmpty } from '../validators';
import Input from './input';

export class DeleteView extends React.Component {
  //   onSubmit(values) {
  //     console.log(values);
  //     console.log(this.props.test);
  //   }
  onSubmit(values) {
    // console.log('LOG VALUES', values.id);
    const id = values.id;
    // const data = {
    //   title: values.title,
    //   author: values.author,
    //   genre: values.genre,
    //   summary: values.summary,
    //   isbn: values.isbn,
    //   status: values.status
    // };
    // console.log('LOG data', data);
    return fetch(`${API_BASE_URL}/books/${id}`, {
      method: 'DELETE',
    //   body: JSON.stringify(data),
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
        return;
      })
      .then(() => console.log('Submitted with values', values))
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
    return (
      <div>
        <h2> Delete View</h2>
        <fieldset>
          <legend>Delete books from catalog</legend>
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
              validate={[required, nonEmpty]}
            />
            {/* <Field
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
              //   validate={[required, nonEmpty]}
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
            /> */}
            <button
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
              Delete Book
            </button>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default reduxForm({
  form: 'delete-view',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('contact', Object.keys(errors)[0]))
})(DeleteView);
import React from 'react';
import { API_BASE_URL } from '../config';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import './css/add-edit.css';
import { required, nonEmpty } from '../validators';
import Input from './input';
import BackToStaffView from './return-to-staff-view';

export class DeleteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    };
  }

  onSubmit(values) {
    // const allWell = 0;
    const id = values.id;
    return fetch(`${API_BASE_URL}/books/${id}`, {
      method: 'DELETE',
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
      .then(
        () => (console.log('Submitted with values', values),
        this.setState({ success: true }))
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
    console.log('LOGGER 2', this.state.success);
    if(this.state.success){
      alert('The selected id has been removed from the catalog')
    }else{
      alert('Item not found');
    }

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
              label="Enter book id:"
              validate={[required, nonEmpty]}
            />
            <div className="button-pack">
              
              <button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
              >
                Delete Book from Catalog
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
  form: 'delete-view',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('contact', Object.keys(errors)[0]))
})(DeleteView);

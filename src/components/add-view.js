import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './css/add-edit.css';

export class AddView extends React.Component {
  onSubmit(values) {
    console.log(values);
    console.log(this.props.test)
  }
  // 

  render() {
    return (
      <div>
        <h2> Staff Add View</h2>
        <fieldset>
          <legend>Add Books to catalog</legend>
          <form
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
            className="staff-crud-form"
          >
            <p>
              <label htmlFor="Title">Title:</label>
              <Field name="title" id="title" type="text" component="input"/>
     
            </p>
            <p>
              <label htmlFor="Author">Author:</label>
              <Field name="author" id="author" type="text" component="input"/>
     
            </p>
            <p>
              <label htmlFor="Genre">Genre:</label>
              <Field name="genre" id="genre" type="text" component="input"/>
     
            </p>
            <p>
              <label htmlFor="isbn">ISBN:</label>
              <Field name="isbn" id="isbn" type="text" component="input"/>
     
            </p>
            <p>
              <button type="submit">
                Add
              </button>
            </p>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default reduxForm({
  form: 'add-view'
})(AddView);

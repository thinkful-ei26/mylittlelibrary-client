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
              <input type="text" />
            </p>
            <p>
              <label htmlFor="Author">Author:</label>
              <input type="text" />
            </p>
            <p>
              <label htmlFor="Genre">Genre:</label>
              <input type="text" />
            </p>
            <p>
              <label htmlFor="isbn">ISBN:</label>
              <input type="text" />
            </p>
            <p>
              <button>
                <a href="addbook.html">Add</a>
              </button>
            </p>
          </form>
        </fieldset>
        <p>UNDER CONSTRUCTION.</p>
      </div>
    );
  }
}

export default reduxForm({
  form: 'add-view'
})(AddView);

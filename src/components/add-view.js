import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './css/add-edit.css';
import { required, nonEmpty } from '../validators';
import Input from './input'

export class AddView extends React.Component {
  onSubmit(values) {
    console.log(values);
    console.log(this.props.test);
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
           
              <Field
                name="title"
                id="title"
                type="text"
                component={Input}
                label="Name"
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
                name="isbn"
                id="isbn"
                type="text"
                component={Input}
                label="ISBN"
                validate={[required, nonEmpty]}
              />
            <p>
              <button type="submit">Add</button>
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

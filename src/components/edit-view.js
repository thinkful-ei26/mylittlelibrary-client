import React from 'react';
import './css/add-edit.css';

export default function EditView() {
  return (
    <div>
      <h2>Staff Edit View</h2>
      <fieldset>
        <legend>Edit books</legend>
        <form action="" className="staff-crud-form">
          <p><label for="title">Title:</label><input type="text" /></p>
          <p><label for="Author">Author:</label><input type="text" /></p>
          <p><label for="Genre">Genre:</label><input type="text" /></p>
          <p><label for="isbn">ISBN:</label><input type="text" /></p>
          <p><button><a href="">submit changes</a></button></p>
        </form>
      </fieldset>
      <p>UNDER CONSTRUCTION.</p>
    </div>
  );
}

import React from 'react';
import EditView from './edit-view';
import AddView from './add-view';

// This view will toggle between add and edit views
export default function StaffView() {
  return (
    <div>
      <h2> Staff View - Will Require Login</h2>
      <form action="">
        <p>
          <button>
            <a href="addbook.html">Add Books to catalog</a>
          </button>
        </p>
        <select name="" id="">
          <option value="allFields">All Fields</option>
          <option value="author">Author</option>
          <option value="title">Title</option>
          <option value="subject">Subject</option>
        </select>
        <input type="text" /> <button>Search</button>
      </form>
      <section class="search-result" />
      <p>
        UNDER CONSTRUCTION. This will be the interface for staff to perform CRUD
        operations on db.
      </p>
      <ul class="title">
        <li>Sample display title,</li>
        <li>Sample display author</li>
      </ul>
      <button>
        {' '}
        <a href="edit.html">Edit</a>
      </button>{' '}
      <button>
        {' '}
        <a href="login.html">Delete</a>
      </button>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to={'./add-view'}>Add Books to catalog</Link>
          </button>
        </p>
        <fieldset>
          <legend>Search the catalog</legend>
          <select name="" id="">
            <option value="allFields">All Fields</option>
            <option value="author">Author</option>
            <option value="title">Title</option>
            <option value="subject">Subject</option>
          </select>
          <input type="text" /> <button>Search</button>
        </fieldset>
      </form>
      <section class="search-result" />
      <p>
        UNDER CONSTRUCTION. This will be the interface for staff to perform CRUD
        operations on db.
      </p>
      <form action="">
        <fieldset>
          <legend>Sample Search Output</legend>
          <ul class="title">
            <li>Sample display title,</li>
            <li>Sample display author</li>
          </ul>
          <button>
            <Link to={'./edit-view'}>Edit</Link>
          </button>
          <button>
            Delete
          </button>
        </fieldset>
      </form>
    </div>
  );
}

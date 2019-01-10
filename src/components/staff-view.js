import React from 'react';
import { Link } from 'react-router-dom';
import './css/staff-view.css'

export default function StaffView() {
  return (
    <div className='staff-view'>
      <h2> Staff View</h2>

      <p>
        <button>
          <Link to={'./add-view'}>Add Books to catalog</Link>
        </button>
      </p>
      <p>
        <button>
          <Link to={'./edit-view'}>Edit/Update existing books</Link>
        </button>
      </p>
      <p>
        <button>
          <Link to={'./delete-view'}> Delete books from the catalog</Link>
        </button>
      </p>
    </div>
  );
}

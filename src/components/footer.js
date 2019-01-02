import React from 'react';
import { Link, Route } from 'react-router-dom';
import './css/footer.css';

export default function Footer() {
  return (
      <footer>
        <Link to={'./staff-view'}>
          <div>Database</div>
        </Link>
     
      </footer>
  );
}

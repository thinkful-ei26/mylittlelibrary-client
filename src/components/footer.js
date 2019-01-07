import React from 'react';
import { Link, Route } from 'react-router-dom';
import RegistrationPage from './registration-page'
import './css/footer.css';

export default function Footer() {
  return (
      <footer>
        <Link to={'./register'}>
          <div>Database</div>
        </Link>
     
      </footer>
  );
}

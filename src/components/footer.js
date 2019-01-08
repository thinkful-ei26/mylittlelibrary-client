import React from 'react';
import { Link } from 'react-router-dom';
// import RegistrationPage from './registration-page';
import './css/footer.css';

export default function Footer() {
  return (
    <footer>
      <Link to={'./login'}>
        <div>Staff Login</div>
      </Link>
    </footer>
  );
}

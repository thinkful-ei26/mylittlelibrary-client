import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';

export default function Header() {
  return (
    <header>
      <h1>My Little Library</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
          <Link to={'./login'}>Staff Login</Link>
          </li>
          {/* <li>
             <a href="">Log in</a>
          </li>
          <li>
              <a href="">Library Information</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

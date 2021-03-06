import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';

export default function Header() {
  return (
    <header>
      <h1>My Little Library</h1>
      <img src="../../images/topbannerwide.jpg" alt="a public library facade" />

      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'./login'}>Staff Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import React from 'react';
import LibraryInformation from './library-information'
import './header.css';

export default function Header() {
  return (
    <header>
      <h1>My Little Library</h1>
      <nav>
        <ul>
          <li>
            <a href="search.html">Home</a>
          </li>
          <li>
            <a href="login.html">Log in</a>
          </li>
          <li>
            <a href="login.html">Library Information</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

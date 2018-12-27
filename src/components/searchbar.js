import React from 'react';
import './searchbar.css';

export default function SearchBar(){


return(
     <section className="searchbar">
    <h3>Catalog Quick Search</h3>
      <form className="searchform" action="">
        <select name="serach fields" id="search-fields">
            <option value="All Fields">All Fields</option>
            <option value="Author">Author</option>
            <option value="Title">Title</option>
            <option value="Subject">Subject</option>
        </select>
        <input type="text"/>
        <button>Search</button>
      </form>
    </section>
)
}
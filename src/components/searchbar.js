import React from 'react';
import './searchbar.css';

export default function SearchBar(){
  const TEST_SEARCH = 'mongodb://dev:password@ds215172.mlab.com:15172/library-app'
  function getDataFromApi(searchTerm, callback) {
  const settings = {
    url: TEST_SEARCH,
    data: {
      q: `${searchTerm} in:name`,  //searchTerm is passed in as 'query' which is the value of the user input.
      per_page: 5
    },
    dataType: 'json',
    type: 'GET',
    success: callback //the callback is the function that puts html to the DOM
  };

  $.ajax(settings);
}
console.log(getDataFromApi())

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
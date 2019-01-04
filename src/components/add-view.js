import React from 'react';
import './css/add-edit.css'


export default function AddView(){

return (
  <div>
 <h2> Staff Add View</h2>
        <fieldset>
            <legend>Add Books to catalog</legend>
            <form action="" className="staff-crud-form">
                  <p><label for="Title">Title:</label><input type="text"/></p>
                  <p><label for="Author">Author:</label><input type="text"/></p>
                  <p><label for="Genre">Genre:</label><input type="text"/></p>
                  <p><label for="isbn">ISBN:</label><input type="text"/></p>
                  <p><button><a href="addbook.html">Add</a></button></p>
            </form>
        </fieldset>
<p>UNDER CONSTRUCTION.</p>
</div>
)
}
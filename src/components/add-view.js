import React from 'react';
import { API_BASE_URL } from '../config';
import './css/add-edit.css'


export default class AddView extends React.Component{
componentDidMount(){
    this.loadBoard();
}
loadBoard() {
        this.setState({
            error: null,
            loading: true
        });
        fetch(`${API_BASE_URL}/board`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(board =>
                this.setState({
                    lists: board.lists,
                    loading: false
                })
            )
            .catch(err =>
                this.setState({
                    error: 'Could not load board',
                    loading: false
                })
            );
    }

functionToPost(){
      function postData(url = `${API_BASE_URL}`, data = {}) {
    return fetch(url, {
        method: "POST", 
        // mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow", 
        referrer: "no-referrer", 
        body: JSON.stringify(data), 
    })
    .then(response => response.json());



}}


render(){
   


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
}
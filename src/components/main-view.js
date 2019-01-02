import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import StudentView from './student-view';


export default function MainView() {
    return (
    <BrowserRouter>
      <div> 
        <StudentView/>
      </div>
    </BrowserRouter>
    );
  }


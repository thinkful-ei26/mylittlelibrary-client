import React from 'react';
import { Link } from 'react-router-dom';
// import './css/footer.css';

export default function BackToStaffView() {
  return (
    
      <Link to={'./staff-view'}>
      <button className='back-to-staff-view'>Back to Staff View</button>
      </Link>
 
  );
}

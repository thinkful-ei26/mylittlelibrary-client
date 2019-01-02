import React from 'react';
import './css/library-information.css';

export default function LibraryInformation(){
    return(
<section className="library-information">
        <ul className="library-information-items">
          <li className="library-name"><a href="">Library Name</a></li>
          <li className="library-address">
            <li>Address 1</li>
            <li>Address 2</li>
          </li>
          <li><bold>tel:</bold> 555-555-5555</li>
          <li><bold>fax:</bold> 555-555-5555</li>
          <li><a href="">www.mylittlelibrary.com</a></li>
          <li><bold>Hours</bold>
            <ul className="hours">
              <li>Monday-Thursday <li>10:00 AM to 5:00 PM</li></li>
              <li>Friday<li>10:00 AM to 2:00 PM</li></li>
            </ul>
          </li>
        </ul>
      </section>
    )
}

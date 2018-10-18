import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';




class VenueList extends Component {

  


  render() {

    return (
      
        <ul id='places' className='nav flex-column'>
        <li>
          <h3>Venue Title</h3>
          <p>Formatted Address</p>
        </li>
        <li>
          <h3>Venue Title</h3>
          <p>Formatted Address</p>
        </li>
        <li>
          <h3>Venue Title</h3>
          <p>Formatted Address</p>
        </li>
        <li>
          <h3>Venue Title</h3>
          <p>Formatted Address</p>
        </li>
        <li>
          <h3>Venue Title</h3>
          <p>Formatted Address</p>
        </li>
        </ul>
      
    );
  }
}

export default VenueList;
import React, { Component } from 'react';
import './App.css';

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <ul className='venueList'>
          <li className='listItem'>
          Restaurant:
          Address:
          Phone:
          <img></img>
          </li>
          <li className='listItem'>Grocery Store</li>
          <li className='listItem'>Gas Station</li>
          <li className='listItem'>Eagle Theater</li>
          <li className='listItem'>ChillyBean Coffee</li>
          <li className='listItem'>Daddy O'Brian's</li>
          <li className='listItem'>Grocery Store</li>
          <li className='listItem'>Gas Station</li>
          <li className='listItem'>Eagle Theater</li>
          <li className='listItem'>ChillyBean Coffee</li>
          <li className='listItem'>Daddy O'Brian's</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
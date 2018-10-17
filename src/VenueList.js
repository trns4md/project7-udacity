import React, { Component } from 'react';
import './App.css';


class VenueList extends Component {
//makeList = () => (())
  render() {

    return (
      
        <ul id='places' className='nav flex-column'/*venues={this.props.venues*}*/>
         <li className='things'>
           <h2>Title of the Restaurant</h2>
            <p>Address somewhere</p>
            <p>In the City of Sugar Hill</p>
            <p>Georgia, USA 30518</p>
         </li>
         <li className='things'>
           <h2>Title of the Restaurant</h2>
            <p>Address somewhere</p>
            <p>In the City of Sugar Hill</p>
            <p>Georgia, USA 30518</p>
         </li>
         <li className='things'>
         <h2>Title of the Restaurant</h2>
            <p>Address somewhere</p>
            <p>In the City of Sugar Hill</p>
            <p>Georgia, USA 30518</p>
         </li>
         <li className='things'>
         <h2>Title of the Restaurant</h2>
         <p>Address somewhere</p>
         <p>In the City of Sugar Hill</p>
         <p>Georgia, USA 30518</p>
      </li>
      <li className='things'>
      <h2>Title of the Restaurant</h2>
            <p>Address somewhere</p>
            <p>In the City of Sugar Hill</p>
            <p>Georgia, USA 30518</p>
         </li>
        </ul>
      
    );
  }
}

export default VenueList;
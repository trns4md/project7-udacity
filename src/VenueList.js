import React, { Component } from 'react';
import './App.css';
import InfoWindow from './InfoWindow';

class VenueList extends Component {
  render() {

    return (
      
        <ul id='places' className='nav flex-column'venues={this.props.venues}>
         
        </ul>
      
    );
  }
}

export default VenueList;
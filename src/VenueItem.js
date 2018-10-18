import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class VenueItem extends Component {

  render() {

    return (
      
        <li id='site'venues={this.props.venues}>
         
        </li>
      
    );
  }
}

export default VenueItem;
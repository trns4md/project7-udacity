import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


 

class VenueList extends Component {
 


  render() {

    return (
      
        <ul className='nav flex-column'venue={this.props.venues}>
        {this.props.venues.map((venueItem)=>
        <li className='siteSquare' key={venueItem.venue.id}>
        <h3 id="siteTitle"><a href={'#'}>{venueItem.venue.name}</a></h3>
        <p>{venueItem.venue.location.formattedAddress}</p>
        </li>)}
 
        </ul>
      
    );
  }
}


export default VenueList;
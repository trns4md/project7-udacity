import React, { Component } from 'react';
import './App.css';
import VenueList from './VenueList';

class Sidebar extends Component {
  render() {
    
    return (
      <nav id='sidebarCan'className='col-md-2'>
        <div className='sidebar-sticky'>
         <VenueList venues={this.props.venues}/>
        </div> 
      </nav>
    );
  }
}

export default Sidebar;
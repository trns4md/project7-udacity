import React, { Component } from 'react';
import './App.css';
import VenueList from './VenueList';
import 'bootstrap/dist/css/bootstrap.css';

class Sidebar extends Component {
  render() {
    
    return (
      <nav id='sidebar'className='col-md-4'>
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Filter</span>
              </div>
              <input type="text" className="form-control" placeholder="Venue Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          <VenueList venues={this.props.venues} />
        </div> 
      </nav>
    );
  }
}

export default Sidebar;
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      query:'',
    }
  }
///Filter Venues with Sidebar Input
  handleChange(event){
    this.setState({query:event.target.value});
  }
  
  render() {
    console.log(this.state.query);
    const filteredVenues = (this.props.venues).filter((venue)=>{
       venue.venue.name.indexOf(this.state.query);
    })
    return (
      <nav id='sidebar'className='col-md-4'>
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Filter</span>
              </div>
              <input 
                id='inputFilter' 
                type="text" 
                className="form-control" 
                placeholder="Venue Name" 
                aria-label="Username" 
                aria-describedby="basic-addon1"
                value={this.state.query}
                onChange={this.handleChange.bind(this)}
                 />
            </div>
              <ul className='nav flex-column'>
                {filteredVenues.map((venueItem)=>
                  <li className='siteSquare' key={venueItem.venue.id}>
                    <h3 id="siteTitle"><a href={'#'}>{venueItem.venue.name}</a></h3>
                      <p>{venueItem.venue.location.formattedAddress}</p>
                  </li>)}
              </ul>
        </div> 
      </nav>
    );
  }
}

export default Sidebar;
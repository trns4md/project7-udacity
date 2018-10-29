import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      query:'',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
 
//Handle User Input
handleChange(event){
  this.props.onFilter(event.target.value);
  this.setState({query: event.target.value})
}
//Handle User Click
handleClick(venue){
  this.props.passClick(venue);
}
  
  render() {
    const query = this.state.query
    
    let blahblah = query == 0;
    const handler = blahblah
      ? this.props.venues
      : this.props.searchVenue
    
    return (
      <nav id='sidebar'className='col-xs-12 col-md-4 col-lg-5' aria-label='Secondary'
      role='listbox'>
        
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
                value={query}
                onChange={this.handleChange}
                 />
            </div>
              <ul className='nav flex-column'>
                {handler.map((venueItem)=>
                  <li className='siteSquare' role='listitem' key={venueItem.venue.id}>
                    <h4 id="siteTitle"onClick={() => this.handleClick(venueItem)}>{venueItem.venue.name}</h4>
                      <p>{venueItem.venue.location.formattedAddress}</p>
                  </li>)}
              </ul>
              
  
      </nav>
    );
  }
}

export default Sidebar;
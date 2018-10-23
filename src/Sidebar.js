import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      query:'',
      searchVenue:[],
    }
  }
//Handle User Input
  handleChange(event){
    this.setState({query:event.target.value});
    const query = event.target.value;
    this.handleFilter(query);
   
  }
  //Handle Filtering Venues with Query
  handleFilter(query){
    const filterVenue =[];
    this.props.venues.filter(venue=>{
      if(venue.venue.name.toLowerCase().indexOf(query.toLowerCase()) >=0)
      filterVenue.push(venue);
     this.setState({searchVenue: filterVenue})
  });
};

  

  render() {
    
      
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
                {this.state.searchVenue.map((venueItem)=>
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
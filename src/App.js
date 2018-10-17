import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import axios from 'axios';
import MapContainer from './MapContainer';


 class App extends Component {
  constructor(props){
    super(props);
      this.state={
        venues:[],
      };
      
    }
    componentDidMount() {
      
      this.getVenues();
    }
    //Request to FourSquare API
    getVenues=()=>{
      const endPoint ='https://api.foursquare.com/v2/venues/explore?';
      const parameters={
        client_id:'SW2YS2FRZRWQZ1ANIK5JVOZQZMFIYZDSNL3CQACSAFD4DG1U',
        client_secret:'NXGC4A3RLMK5MC50NCZTNM5EUM0GLENKYKK51OFLTDYTKE31',
        near:'Sugar Hill, GA',
        v:'20181510',
        radius: 19312.1,
      }
      axios.get(endPoint + new URLSearchParams(parameters))
      .then(response =>{
        this.setState({
          venues:response.data.response.groups[0].items
        },)
        console.log(response);
      })
      .catch(error=>{
        console.log('ERROR' + error);
      })
    }
    render() {
      
        return (
          <div>
              <Navigation />
              <div className='container-fluid'>
                <div className='row'>
                  <Sidebar className='col-md-4' venues={this.state.venues} />
                  <MapContainer className='col-md-6 float-right' venues={this.state.venues}/>
                </div>
            </div>
          </div>               
        );
        
      }
    }
 
export default App;

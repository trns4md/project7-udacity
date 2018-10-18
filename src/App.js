import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import axios from 'axios';



 class App extends Component {
  constructor(props){
    super(props);
      this.state={
        venues:[],
      };
      
    }
    componentDidMount() {
      this.renderMap();
      this.getVenues();
    }
    renderMap = () => {
      loadMap('https://maps.googleapis.com/maps/api/js?key=AIzaSyAGLWvOb4JYsG5LujGnURa4qVYfh03EB_Y&callback=initMap');
      window.initMap = this.initMap;
    }
    initMap=()=>{
      let map= new window.google.maps.Map(document.getElementById('map'),{
        center: {lat: 34.1064895,lng: -84.0335197},
        zoom: 13,
      })
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
              <div className='container'>
                <div className='row'>
                  <Sidebar className='col-md-4' venues={this.state.venues} />
                  <div id='map'className='col-md-8'></div>
                </div>
            </div>
          </div>               
        );
        
      }
    }
  function loadMap(url){
    const index = window.document.getElementsByTagName('script')[0]
    const script = window.document.createElement('script')
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
  }
 
export default App;

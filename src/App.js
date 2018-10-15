import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios'


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
        },this.loadMap())
        console.log(response);
      })
      .catch(error=>{
        console.log('ERROR' + error);
      })
    }

      loadMap = () => {
      loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAGLWvOb4JYsG5LujGnURa4qVYfh03EB_Y&callback=initMap")
      window.initMap = this.initMap;
    }
    initMap=()=> {
          const map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 34.1064895, lng: -84.0335197},
          zoom: 13
        });
        this.state.venues.map(myVenue=>{
         var marker = new window.google.maps.Marker({
          position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
          map: map,
          
        }); 
        })
        
      }
      
    
    render() {
      
        return (
          <div className="container">
            <Navbar />
            <Sidebar />
            <div id='map'></div>
            
          </div>
          
            
          
               
                
        );
        
      }
    }
  function loadScript(url){
      let index = window.document.getElementsByTagName('script')[0];
      let script = window.document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = url;
      index.parentNode.insertBefore(script, index);
    }
export default App;

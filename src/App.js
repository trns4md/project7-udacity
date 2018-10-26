import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';



 class App extends Component {
  constructor(props){
    super(props);
      this.state={
        venues:[],
        query:'',
        searchVenue:[],
        mapMarkers:[],
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
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
            }, this.renderMap())
          })
          .catch(error=>{
            console.log('ERROR' + error);
          })
        }
     //Create the map
    renderMap = () => {
      loadMap('https://maps.googleapis.com/maps/api/js?key=AIzaSyAGLWvOb4JYsG5LujGnURa4qVYfh03EB_Y&callback=initMap');
      window.initMap = this.initMap;
    }
    initMap=()=>{
      
      let map= new window.google.maps.Map(document.getElementById('map'),{
        center: {lat: 34.1064895,lng: -84.0335197},
        zoom: 13,
      })
      this.addMarker(map);
    
    }
      
      addMarker=(map)=>{
          let markerList = this.state.venues.map(myVenue=>{  
           let contentString = `${myVenue.venue.name}${myVenue.venue.location.formattedAddress}` 
            let marker = new window.google.maps.Marker({
            position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
            map: map,
            name: myVenue.venue.name,
            id: myVenue.venue.id,
            animation: window.google.maps.Animation.DROP,
            icon:'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          }); 
          marker.addListener('click',()=>{
            if(marker.getAnimation() !== null) {marker.setAnimation(null); }
            else{marker.setAnimation(window.google.maps.Animation.BOUNCE); }
            setTimeout(()=>{marker.setAnimation(null, 1500)});
            infowindow.open(map, marker);
          });
          let infoContent =`<h3>${myVenue.venue.name}</h3>`

          let infowindow = new window.google.maps.InfoWindow({
            content: infoContent
          });

          return marker;
        })
        this.setState({mapMarkers: markerList})
        
      }
      handleClick (venue){
        let marker = this.mapMarkers.filter(mapMarker => mapMarker.id == venue.id)[0];
        console.log(marker)
      }
     
      handleInputChange(query){
        this.setState({query: query});
        this.handleFilter(query);
        this.filterMarkers(query);
      }
      //Handle Filtering Venues with Query
      handleFilter(query){
        const filterVenue =[];
        this.state.venues.filter(venue=>{
          if(venue.venue.name.toLowerCase().indexOf(query.toLowerCase()) >=0)
          filterVenue.push(venue);
         this.setState({searchVenue: filterVenue})
      });
       
    }
  //Filter Map Markers
    filterMarkers(query){
      this.state.mapMarkers.forEach(mapMarker => {
         mapMarker.name.toLowerCase().includes(query.toLowerCase()) == true ?
         mapMarker.setVisible(true) :
         mapMarker.setVisible(false);
      });  
    }
 
  
    render() {
      console.log(this.state.venues)
        return (
          <div>
              <Navigation />
              <div className='container'>
                <div className='row'>
                  <Sidebar venues={this.state.venues} mapMarkers={this.state.mapMarkers} searchVenue={this.state.searchVenue} handleClick={this.props.handleClick}query={this.props.query} onFilter={this.handleInputChange} />
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

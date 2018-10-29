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
        infoWindow:null,
        map:null,
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      
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
      this.setState({map: map});
    }
      //Creating Map Markers
      addMarker= map =>{
          let markerList = this.state.venues.map(myVenue=>{  
            let marker = new window.google.maps.Marker({
            position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
            map: map,
            name: myVenue.venue.name,
            id: myVenue.venue.id,
            animation: window.google.maps.Animation.DROP,
            icon:'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          }); 
          marker.addListener('click',()=>{
            this.state.venues.forEach(venue=>{
              if(marker.id === venue.venue.id){
                this.openInfoWindow(marker, venue);
              }
            });
            
          });
          let infowindow = new window.google.maps.InfoWindow({
            content: '',
            map: map,
            venue:'',
          });
          this.setState({
            infoWindow: infowindow
          });
          return marker;
        });
        this.setState({mapMarkers: markerList})
      };
      
      openInfoWindow=(marker, venue)=>{
        
        if(marker.getAnimation() !== null) {
          marker.setAnimation(null); 
        }else{
          marker.setAnimation(window.google.maps.Animation.BOUNCE); 
        } setTimeout(()=>{
          marker.setAnimation(null, 1500)
        });
        
        this.state.infoWindow.setContent(`<h4>${venue.venue.name}</h4>`);
        this.state.infoWindow.open(this.state.map, marker);
      };
  
     //Passing Query Input
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
         
      });
       return this.setState({searchVenue: filterVenue})
    }
  //Filter Map Markers
    filterMarkers(query){
      this.state.mapMarkers.forEach(mapMarker => {
         mapMarker.name.toLowerCase().includes(query.toLowerCase()) === true 
         ? mapMarker.setVisible(true) 
         : mapMarker.setVisible(false);
      });  
    }
    
    //Open Infowindows onClick of List Item
    handleClick = venue =>{
      console.log(venue);
      this.state.mapMarkers.forEach(mapMarker =>{
        if(mapMarker.id === venue.venue.id){
          console.log(mapMarker, venue);
          this.openInfoWindow(mapMarker, venue);
        }});
      }
    
 
  
    render() {
      
        return (
          <div>
            <Navigation />
              <div className='container-fluid'>
                <div className='row'>
                  <Sidebar 
                    venues={this.state.venues} 
                    mapMarkers={this.state.mapMarkers} 
                    searchVenue={this.state.searchVenue} 
                    passClick={this.handleClick}
                    query={this.props.query} 
                    onFilter={this.handleInputChange} />
                  <div id='map'className='col-xs-12 col-md-11 col-lg-9'></div>
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

import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      google:{
        lat: 34.06480,
        lng: -84.022340,
      }
    };
  }
  render() {
    return (
      <Map className='map' google={this.props.google} zoom={14}>
 
        
      </Map>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDR_gWcbr-0HVHkgBTvABijAUn__ZROGBk')
})(MapContainer)
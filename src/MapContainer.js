import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
    
  render() {
    return (
            <div className='container-fluid'>
                <div className='col-md-9'>
                <Map
                    id='map' 
                    google={this.props.google} 
                    zoom={14}
                    initialCenter={{
                        lat:34.1064895,
                        lng:-84.0335197,
                    }}
                    onClick={this.onMapClicked}>
    
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
    
                    <InfoWindow onClose={this.onInfoWindowClose} />
                    <div>
                        <h1>{}</h1>
                    </div>
                </Map>
            </div>
        </div>
    
      
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAGLWvOb4JYsG5LujGnURa4qVYfh03EB_Y')
})(MapContainer)
            

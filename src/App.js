import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';



 class App extends Component {
  constructor(props){
    super(props);
      this.state={
        
      };

    }
    componentDidMount() {
      this.loadMap();
     
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

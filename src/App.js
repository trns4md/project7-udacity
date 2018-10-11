import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MapContainer from './MapContainer';

 class App extends Component {
  constructor(props){
    super(props);
      this.state={
        
      };
    }
    componentDidMount() {
    
    }
  
    render() {
      
        return (
          <div>
            <Navbar />
            <Sidebar />
            <MapContainer />
          </div>
          
            
          
               
                
        );
      }
    }
  
export default App;

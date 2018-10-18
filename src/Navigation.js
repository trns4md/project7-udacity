import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



class Navigation extends Component {    
      render() {
          return (
            <nav id='navbar'className="navbar top-bar fixed">
            <a id='navLogo'className="navbar-brand">Sugar Hill Neighborhood Map</a>
            
          </nav>
          )
        }
      }
    
  export default Navigation;
  
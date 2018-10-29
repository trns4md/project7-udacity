import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



class Navigation extends Component {    
      render() {
          return (
            <nav id='navbar'className="navbar top-bar fixed" role='navigation' aria-label='Primary'>
            <a href='https://cityofsugarhill.com'id='navLogo'className="navbar-brand">Sugar Hill Neighborhood Map</a>
            
          </nav>
          )
        }
      }
    
  export default Navigation;
  
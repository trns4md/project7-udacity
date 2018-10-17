import React, { Component } from 'react';
import './App.css';



class Navigation extends Component {    
      render() {
          return (
            <nav id='navbar'className="navbar top-bar fixed">
            <a id='navLogo'className="navbar-brand">Sugar Hill Neighborhood Map</a>
            <form className="form-inline">
              <input id='navInput' className="form-control mr-sm-2" type="search" placeholder="Filter Venues" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Filter</button>
            </form>
          </nav>
          )
        }
      }
    
  export default Navigation;
  
import React, { Component } from 'react';
import './App.css';


class Navbar extends Component {

    
      render() {
        
          return (
              <div>
              <header className='navbar'>
                  <nav className='navbar_nav'>
                   
                    <h2 className='navLogo'>Sugar Hill Neighborhood Map</h2>
                    <input  className='navInput' type='text' placeholder='Filter Venues' />
                  </nav>
              </header>
            </div>
                 
                  
          )
        }
      }
    
  export default Navbar;
  
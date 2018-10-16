import React, { Component } from 'react';
import './App.css';
import { 
    Navbar, 
    FormGroup, 
    FormControl, 
    Col,
} from 'react-bootstrap'


class Navigation extends Component {    
      render() {
          return (
              <Navbar className='navbar_nav'>
                {'<Col xs={12} md={8} />'}
                <Navbar.Header className='navbar'>
                <Navbar.Brand>
                    <a href='#'className='navLogo'>Sugar Hill Neighborhood Map</a>
                </Navbar.Brand> 
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form >
                    <FormGroup>
                        <FormControl className="navInput"type="text" placeholder="Filter Venues" />
                    </FormGroup>{' '}
                    </Navbar.Form>
                </Navbar.Collapse>      
              </Navbar>  
          )
        }
      }
    
  export default Navigation;
  
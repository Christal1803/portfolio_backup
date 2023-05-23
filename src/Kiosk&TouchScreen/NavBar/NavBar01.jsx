import React from 'react'
import logo from "../../../src/assets/logo.svg";
import Button from "../../../src/assets/hamburger.svg";
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar01() {


  return (
    <div>
      <nav class="navbar container-align">
          
          <a   class="navbar-brand">
            <Link to={'/'}>
            <img  src={logo} class="img-fluid "/>
            </Link>
            </a>
      
          <div class="select-btn">
          
          </div>
        
          
          <img src={Button} class="img-fluid" />
      </nav>
    </div>
  )
}

export default NavBar01

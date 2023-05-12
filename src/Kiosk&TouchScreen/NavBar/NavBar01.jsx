import React from 'react'
import logo from "../../../src/assets/logo.svg";
import Button from "../../../src/assets/hamburger.svg";
import './NavBar.css'

function NavBar01() {
  return (
    <div>
      <nav class="navbar container-align">
          <a class="navbar-brand"><img src={logo} class="img-fluid "/></a>
          <div class="select-btn">
          
          </div>
          
          
          <img src={Button} class="img-fluid" />
      </nav>
    </div>
  )
}

export default NavBar01

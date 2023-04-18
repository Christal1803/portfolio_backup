import React from 'react'
import logo from "../../../src/assets/logo.svg";
import Button from "../../../src/assets/hamburger.svg";
import './NavBar.css'

function NavBar02() {
  return (
    <div>
      <nav class="navbar container-align">
          <a class="navbar-brand"><img src={logo} class="img-fluid"/></a>
          <div class="select-btn">
          <select class="form-select w-auto">
            <option>Kiosk & Touchscreen</option>
            <option>Mobile Development</option>
            <option>Desktop Applications</option>
            <option>Mobile Applications</option>
            <option>Cloud Solutions</option>
            <option>Data Science & Engineering</option>
          </select>
          </div>
          <img src={Button} class="img-fluid" />
      </nav>
    </div>
  )
}

export default NavBar02

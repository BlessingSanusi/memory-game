import React from 'react'
import './style.css'
function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <ul>
          <li className="brand animated lightSpeedIn">
            <a href="/">Memory Game</a>
          </li>
    
          <li>{props.message}</li>
    
          <li id="cur-sco">Current Score: {props.score} | </li>
    
          <li id="top-sco">Top Score: {props.topScore}</li>
        </ul>
      </nav>
          )
}

export default Navbar;
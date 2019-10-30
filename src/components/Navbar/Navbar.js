import React from 'react'
import './style.css'
function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="navbar-header">
        
					
					<div class="business-logo-align col-md-10" >
						<h3><a href="/">Memory Game</a></h3>
					</div> 
					
            </div>

            <div class="navbar-collapse collapse">
					<ul class="nav navbar-nav navbar-right">
						<li class="col-md-6 col-xs-6 text-center"><h5>Current Score: {props.score}</h5></li>
						<li class="col-md-6 col-xs-6 text-center"><h5>Top Score: {props.topScore}</h5></li> 
					</ul>
					
					<div class=" col-xs-9 col-sm-12 col-md-8 pd-t-10" >
						<ul class="nav navbar-nav  navbar-centerr">
							<li><h5>{props.message}</h5></li>
							
						</ul>
					</div> 
				</div>
     
      </nav>
          )
}

export default Navbar;
import React from 'react'
import "./Homepage.css"
import "./Footer.css"
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Homepage = () => {
    return (
        <div>
          <div className="body1">
          <div className="image">
          
          <div id="nav">      
                <Link to="/"><label class="logo">PlayerX</label></Link>
                <ul>
                    <li><Link to ="/"><ab class="active">Home</ab></Link></li>
                    <li><ab>REGISTER</ab>                 
                        <ul>
                        <li><Link to ="/registration_cs"><aa>COUNTER STRIKE</aa></Link></li>
                          <li><Link to ="/registration_cod"><aa>CALL OF DUTY</aa></Link></li>
                        </ul> 
                    </li>           
                    <li><Link to ="/aboutus"><ab>ABOUT US</ab></Link></li>
                    <li><Link to="/contactus"><ab>CONTACT US</ab></Link></li>
                    <li><Link to = "/login"><ab>LOG IN</ab></Link></li>
                    <li><Link to = "/logout"><ab>LOG OUT</ab></Link></li>
                </ul>
          </div>
          
          </div>
        <div class="container">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>COD</h2>
            <h3>CALL OF DUTY</h3>
            <p>TO REGISTER FOR UPCOMING EVENTS,CLICK HERE!!</p>
            <Link to ="/registration_cod"><ac>REGISTER</ac></Link>
          </div>
        </div>
      </div>
    
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>COS</h2>
            <h3>COUNTER STRIKE</h3>
            <p>TO REGISTER FOR UPCOMING EVENTS,CLICK HERE!!</p>
            <Link to ="/registration_cs"><ac>REGISTER</ac></Link>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>ABS</h2>
            <h3>ABOUT US</h3>
            <p>TO KNOW MORE ABOUT US,CLICK HERE!!</p>
            <Link to="/aboutus"><ac >ABOUT US</ac></Link>
          </div>
        </div>
      </div>


    </div>

    
    <footer> 
      <small>&copy; Copyright 2018, Example Corporation</small> 
    </footer>

    </div>    
        </div>
    )
}

export default Homepage

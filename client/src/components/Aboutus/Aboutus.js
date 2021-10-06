import React from 'react'
import "./Aboutus.css"
import { Link } from 'react-router-dom'  

const Aboutus = () => {
    return (
        <>

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

            <body className="image5">
                <div class="content11">
                    <h1>ABOUT US</h1>
                    <p>WE ARE HERE TO CONNECT YOU TO THE WORLD OF ONLINE GAMING.<br/>AS WE HAVE OUR PORTAL TO REGISTER PLAYER FOR UPCOMING CHALLENGES AND CONTESTS.<br/>
                    GET READY FOR MIRACLES THAT ARE GOING TO HAPPEN.<br/>
                    HERE YOU CAN REGISTER BY CREATING YOUR ACCOUNT AND ADDING MINOR DETAILS FURTHER INSTRUCTION WILL REACH YOU BY EMAIL.</p>
                </div>
            </body>
        </>
    )
}

export default Aboutus

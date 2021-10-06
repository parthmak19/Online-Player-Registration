import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Registration_cs.css"
import { Link } from 'react-router-dom'

import { useHistory } from "react-router-dom";

const Registration_CS = () => {

    const history = useHistory();
    const [userData,setUserData] = useState({});
    //console.log(userData.name);
    const [user,setUser] = useState({
        name:"",
        email:"",
        game:"COUNTER STRIKE",
        player_profile_name:"",
        player2_profile_name:"",
        team_name:""
    })

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register_player = async(e) =>
    {
     
         e.preventDefault();
        const { game, player_profile_name,player2_profile_name,team_name} = user
        const { name ,email }=userData
        console.log(name,email,game,player_profile_name,player2_profile_name,team_name);
        const res = await fetch("/users/registration_cs", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,game,player_profile_name,player2_profile_name,team_name
            })
        });

        const data = await res.json();
        console.log(data)
        if(res.status === 422 || !data)
        {
            console.log("hi");
            window.alert("invalid registration")
            console.log("invalid registration")
        }
        else
        {
            window.alert("succesfull region")
            console.log("succesfull registration")
            //console.log("hi")
            history.push("/login")
        }
        
        
    }
  
    const callRegistrationPage = async() =>
    {
        try{
            const res = await fetch('/users/registration_cs',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"  
            });

            const data = await res.json();
 
            setUserData(data);

            if(!res.status===200)
            {
                const error = new Error(res.error);
                throw error;
            }
        }
        catch(err){
            console.log(err);
            history.push('/login')
        }
    }

    useEffect(() => {
        callRegistrationPage();
    },[]);
    
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


        <body className="image3">
        <div className="Registration-cs-card">
        <h1>REGISTRATION FOR CS</h1>
        <form method="POST" class="input-div">

        <div class="textbox">
        <i class="fas fa-user"></i>    
        <input type="text" name = "name" value = {userData.name}  onChange= {handleChange} autoComplete="off" readonly/> 
        </div>

        <div class="textbox">
        <i class="far fa-envelope"></i>
        <input type="text" name = "email" value = {userData.email} onChange= {handleChange} autoComplete="off" readonly/>
        </div>

        <div class="textbox">
        <i class="fas fa-gamepad"></i>
        <input type="text" name = "game" value = {user.game}  onChange= {handleChange} autoComplete="off" readonly/>
        </div>

        <div class="textbox">
        <i class="fas fa-ghost"></i>
        <input placeholder="PROFILE NAME PLAYER 1" type="text" name = "player_profile_name" value = {user.player_profile_name} onChange= {handleChange} autoComplete="off"/>
        </div>

        <div class="textbox">
        <i class="fas fa-ghost"></i>
        <input placeholder="PROFILE NAME PLAYER 2" type="text" name = "player2_profile_name" value = {user.player2_profile_name} onChange= {handleChange} autoComplete="off"/>
        </div>

        <div class="textbox">
        <i class="fas fa-user-friends"></i>
        <input placeholder="TEAM NAME" type="text" name = "team_name" value = {user.team_name} onChange= {handleChange} autoComplete="off"/>
        </div>

        <div className="btn1" onClick={register_player}>Register</div>
        
        </form>
        </div>
        </body>
       </>
    )
}

export default Registration_CS

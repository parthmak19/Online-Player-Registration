import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import "./Contactus.css"

const Contactus = () => {

    const history = useHistory();
    const [userData,setUserData] = useState({});
    //console.log(userData.name);
    const [user,setUser] = useState({
        name:"",
        email:"",
        regards:""
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
        const { regards} = user
        const { name ,email }=userData
       // console.log(name,email,game,player_profile_name,player2_profile_name,team_name);
        const res = await fetch("/users/contactus", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,regards
            })
        });

        const data = await res.json();

        if(res.status === 422 || !data)
        {
            window.alert("invalid registration")
            console.log("invalid registration")
        }
        else
        {
            window.alert("succesfull registration")
            console.log("succesfull registration")
            //console.log("hi")
            history.push("/login")
        }
        
        
    }
  
    const callRegistrationPage = async() =>
    {
        try{
            const res = await fetch('/users/contactus',{
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

        <body className="image4">
        <div className="contactus">
        <h1>CONTACT US</h1>
        <form method="POST" class="input-div">

        <div class="textbox">
        <i class="fas fa-user"></i>
        <input type="text" name = "name" value = {userData.name}  onChange= {handleChange} autoComplete="off" readonly/> 
        </div>

        <div class="textbox">
        <i class="fas fa-envelope"></i>
        <input type="text" name = "email" value = {userData.email} onChange= {handleChange} autoComplete="off" readonly/> 
        </div>

        <div class="textbox">
        <i class="fas fa-user"></i>
        <input  type="text" placeholder="REGARDS" name = "regards" value = {user.regards} onChange= {handleChange} autoComplete="off"  />
        </div>

        <div className="btn1" onClick={register_player}>SUBMIT</div>
        <ul className="icons">
            <li><i class="fab fa-instagram"></i></li>
            <li><i class="fab fa-facebook-f"></i></li>
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-discord"></i></li>
        </ul>
        
        </form>
        </div>
        </body>
       </>
    )
}

export default Contactus

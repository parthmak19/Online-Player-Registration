import React, {useState} from 'react'
import { Link } from 'react-router-dom'


import { useHistory } from 'react-router'
import "./signup.css";

const Signup = () => {

    const history = useHistory()

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        password2:""
    })

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
 
    const register = async(e) =>
    {
        e.preventDefault();
        const {name, email, password, password2} = user

        const res = await fetch("/users/signup", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,password,password2
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

    return (
        <>
        <div id="nav">      
                <Link to="/"><label class="logo">PlayerX</label></Link>
                <ul>
                <li><Link to ="/"><ab class="active">Home</ab></Link></li>
                    <li><ab>REGISTER</ab>                 
                        <ul>
                          <li><Link><aa>COUNTER STRIKE</aa></Link></li>
                          <li><Link><aa>CALL OF DUTY</aa></Link></li>
                        </ul> 
                    </li>           
                    <li><Link to ="#"><ab>Services</ab></Link></li>
                    <li><Link to="/contactus"><ab>CONTACT US</ab></Link></li>
                    <li><Link to = "/login"><ab>LOG IN</ab></Link></li>
                    <li><Link to = "/logout"><ab>LOG OUT</ab></Link></li>
                </ul>
          </div>
         
        <body className="image1">
            
        
        <div className="sign-up-card">  
        
        {console.log("User", user)}     
        <h1>Register</h1>
        
        <form method="POST" class="input-div">
        
        <div class="textbox">
        <i class="fas fa-user"></i>
        <input placeholder="USERNAME"type="text" name = "name" value = {user.name}  onChange= {handleChange} autoComplete="off"/>
        </div>

        <div class="textbox">
        <i class="far fa-envelope"></i>
        <input placeholder="EMAIL" type="text" name = "email" value = {user.email}  onChange= {handleChange} autoComplete="off"/>
        </div>

        <div class="textbox">
        <i class="fas fa-lock"></i>
        <input placeholder="PASSWORD" type="password" name = "password" value = {user.password}  onChange= {handleChange} autoComplete="off" />  
        </div>

        <div class="textbox">
        <i class="fas fa-lock"></i>
        <input placeholder="CONFIRM PASSWORD"type="password" name = "password2" value = {user.password2}   onChange= {handleChange} autoComplete="off"/>
        </div>
        
        <div className="btn1" onClick={register}>Register</div>
        
        <>Already Registered!!<div className="link1" onClick = {() => history.push("/login")}>Login</div></>
        </form>
        </div>     
        
        </body>

         
        
        </>
    )
}

export default Signup

import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
//      import "./Login.css"

import { useHistory } from 'react-router'
const Login = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = async (e) => {
        e.preventDefault();
        const { email, password } = user
        const res = await fetch('/users/login', {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();

        if (res.status === 400 || !data) { window.alert(" credentials") }
        else {
            window.alert("login sucessfull")
            history.push("/signup")
        }


    }

    return (
        <>

            <div id="nav">
                <Link to="/"><label class="logo">PlayerX</label></Link>
                <ul>
                    <li><Link to="/"><ab class="active">Home</ab></Link></li>
                    <li><ab>REGISTER</ab>
                        <ul>
                            <li><Link to="/registration_cs"><aa>COUNTER STRIKE</aa></Link></li>
                            <li><Link to="/registration_cod"><aa>CALL OF DUTY</aa></Link></li>
                        </ul>
                    </li>
                    <li><Link to="/aboutus"><ab>ABOUT US</ab></Link></li>
                    <li><Link to="/contactus"><ab>CONTACT US</ab></Link></li>
                    <li><Link to="/login"><ab>LOG IN</ab></Link></li>
                    <li><Link to="/logout"><ab>LOG OUT</ab></Link></li>
                </ul>
            </div>

            <body className="image1">

                <div className="log-in-card">
                    {console.log("User", user)}
                    <h1>Login</h1>

                    <form className="input-div">

                        <div class="textbox">
                            <i class="far fa-envelope"></i>
                            <input placeholder="EMAIL" type="text" name="email" value={user.email} onChange={handleChange} autoComplete="off" />
                        </div>

                        <div class="textbox">
                            <i class="fas fa-lock"></i>
                            <input placeholder="PASSWORD" type="password" name="password" value={user.password} onChange={handleChange} autoComplete="off" />
                        </div>

                        <div className="btn1" onClick={login}>Login</div>

                        <>Don't have an Account?<div className="link1" onClick={() => history.push("/signup")}>Signup</div></>

                    </form>

                </div>
            </body>
        </>
    )
}

export default Login

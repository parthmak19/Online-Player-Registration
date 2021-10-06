import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const Logout = () => {
    const history = useHistory();
    useEffect(()=>{
        
        fetch("/users/logout",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            history.push('/login',{replace:true});
            if(res.status!==200)
            {
                const error = new Error(res.error);
                throw error
            }
        }).catch((err)=>{
            console.log(err)
        })
    });

    return (
        <div>
            <h1>logout</h1>
        </div>
    )
}

export default Logout

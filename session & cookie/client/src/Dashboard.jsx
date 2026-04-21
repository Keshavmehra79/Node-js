import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
function Dashboard() {
    const [cookie,setCookie]=useState({})
    const loaddata=async()=>{
        const res=await axios.get("http://localhost:8000/session/getcookie");
        setCookie(res.data);        
    }

    useEffect(()=>{
        loaddata()
    },[])

    console.log(cookie);
    
    return (<>
        <hr />

        <h1>Dashboard</h1>

        <h1>Wellcome :{cookie.name} </h1>
        <h4>Your email is :{cookie.email}  </h4>
        <hr />
        
    </>
    )
}

export default Dashboard
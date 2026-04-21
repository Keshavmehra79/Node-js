import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
function Display() {
        const [input, setinput] = useState({})
    const loaddata=async()=>{
        const res=await axios.get("http://localhost:8000/session/getuser");
        setinput(res.data)
    }
    
    useEffect(()=>{
        loaddata()
    },[])
        console.log(input)
    return (<>
  <hr />
  <h1>Display will be here</h1>
  
  <h1>Your name is :{input.user}</h1><br />
  <h1>Your email is :{input.email}</h1><br />
  <h1>Your mobile is :{input.mobile}</h1><br />
  </>
  )
}

export default Display
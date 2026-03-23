import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [input,setInput]=useState({})
    const navigate=useNavigate();
    const handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input)
    }

    const handleSubmit=async()=>{
        try {
            const res=await axios.post("http://localhost:4000/employees/login",input) 
            console.log(res.data)
            localStorage.setItem("token",res.data.token)
            navigate("/home")

            
        } catch (error) {
            console.log(error.response.data)
        }
    }
  return (<>
  <hr />
  Enter email:<input type='text' name='email' onChange={handleChange}/>
  <br /><br />
  Enter password:<input type='text' name='password' onChange={handleChange}/>
  <br /><br />
<button onClick={handleSubmit}>Submit</button>
<hr />
  </>
  )
}

export default Login
import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
     const navigate=useNavigate();
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

    const handleSubmit=async()=>{
            try {
                const api="http://localhost:8000/session/logincookie"
                const res=await axios.post(api,{name,email});
                console.log(res.data)
                navigate("/dashboard")
            } catch (error) {
                console.log(error)
            }
    }
  return (<>
  <hr />
  <h1>This is loginPage</h1>

   Enter name:<input type="text" name="name" onChange={(e) => { setName(e.target.value) }} />
        <br /><br />
        Enter email:<input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}} />
        <br /><br />
        <button onClick={handleSubmit}>Submit</button>
  </>
  )
}

export default Login
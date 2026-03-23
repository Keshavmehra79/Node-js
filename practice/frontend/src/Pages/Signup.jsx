import React, { useState } from 'react'
import axios from 'axios'

function Signup() {
    const[input,setinput]=useState({});
    const handleChange=(e)=>{
        let name=e.target.name;
        let val=e.target.value;
        setinput(values=>({...values,[name]:val}))
                
    }

    const handelSubmit=async(e)=>{
      e.preventDefault();
     const res=await axios.post("http://localhost:4000/employees/signup",input);
     alert(res.data);
    }
    
  return (<>
  <h1>Insertions</h1>

  <form onSubmit={handelSubmit}>
    Enter empname:<input type='text' name='name' onChange={handleChange}/><br/><br/>
    Enter empsalary:<input type='text' name="salary" onChange={handleChange}/><br/><br/>
    Enter email:<input type='text' name='email' onChange={handleChange}/><br/><br/>
    Enter password:<input type='text' name='password' onChange={handleChange}/><br/><br/>
    <input type="submit" />
  </form>
  </>
  )
}

export default Signup
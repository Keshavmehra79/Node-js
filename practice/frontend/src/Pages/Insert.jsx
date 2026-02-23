import React, { useState } from 'react'
import axios from 'axios'

function Insert() {
    const[input,setinput]=useState({});

    const handleChange=(e)=>{
        let name=e.target.name;
        let val=e.target.value;
        setinput(values=>({...values,[name]:val}))        
    }

    const handelSubmit=async(e)=>{
      e.preventDefault();
     const res=await axios.post("http://localhost:9000/employees/insert",input);
     alert(res.data);
    }
    
  return (<>
  <h1>Insertions</h1>

  <form onSubmit={handelSubmit}>
    Enter empname:<input type='text' name='name' onChange={handleChange}/><br/><br/>
    Enter empsalary:<input type='text' name="salary" onChange={handleChange}/><br/><br/>
    Enter designation:<input type='text' name='designation' onChange={handleChange}/><br/><br/>
    Enter empcity:<input type='text' name="city" onChange={handleChange}/><br/><br/>
    <input type="submit" />
  </form>
  </>
  )
}

export default Insert
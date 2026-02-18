import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Insert() {
  const [formdata,setFormdata]=useState({});

  const handelchange=(e)=>{
    let name=e.target.name;
    let val=e.target.value;
    setFormdata(values=>({...values,[name]:val}));
    console.log(formdata);
    
  }

  const handelsubmit=async(e)=>{
    e.preventDefault()
    const api="http://localhost:8000/students/savedata";
    const res=await axios.post(api,formdata);
    console.log(res);
    alert(res.data);
    
  }
  
  return (<>
  <h1>This is insert page....</h1>

  <form onSubmit={handelsubmit}>
    Enter rollno:<input type="text" name='rollno' onChange={handelchange}/><br/><br/>
    Enter name:<input type="text" name='name' onChange={handelchange}/><br/><br/>
    Enter city :<input type="text" name='city' onChange={handelchange} /><br/><br/>
    Enter fees:<input type="text" name='fees' onChange={handelchange}/><br/><br/>

      <input type="submit" />
  </form>
  </>
  )
}

export default Insert
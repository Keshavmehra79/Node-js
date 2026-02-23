import React, { useState } from 'react'
import axios from 'axios'
function Insert() {
  const [input ,setinput]=useState({});

  const handelChange=(e)=>{
    const name=e.target.name;
    const val=e.target.value;
    setinput(values=>({...values,[name]:val}));
  }

  const handleSubmit=async()=>{
    const response=await axios.post("http://localhost:1000/students/insert",input);
    console.log(response.data)
  }
  return (<>
  <hr/>
  <br/>
  Enter rollno:<input type="text" name="rollno" onChange={handelChange} />
  <br/>
  Enter name:<input type="text" name="name" onChange={handelChange}/>
  <br/>
  Enter coursename:<input type="text" name='course' onChange={handelChange}/>
  <br/>
  Enter fees:<input type="text" name="fees" onChange={handelChange}/>
  <br/>
  <button onClick={handleSubmit}>Submit</button>
  </>
  )
}

export default Insert
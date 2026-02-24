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
    const response=await axios.post("http://localhost:2000/students/insert",input);
    console.log(response.data)
  }
  return (<>
  <hr/>
  <br/>
  Enter Authorname:<input type="text" name="author" onChange={handelChange} />
  <br/><br/>
  Enter Authoremail:<input type="text" name="email" onChange={handelChange}/>
  <br/><br/>
  Enter Bookname:<input type="text" name='bookname' onChange={handelChange}/>
  <br/><br/>
  Enter price:<input type="text" name="price" onChange={handelChange}/>
  <br/><br/>    
  <button onClick={handleSubmit}>Submit</button>
  </>
  )
}

export default Insert
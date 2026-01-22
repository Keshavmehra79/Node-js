import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function Insert() {
    const [formdata,setformdata]=useState({});
    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setformdata(values=>({...values,[name]:value}))
    }

    const handlesubmit=async ()=>{
            await axios.post("http://localhost:3000/mydata",formdata);
            alert("Data sent..........")
    }
  return (<>
  Enter name:<input type='text' name="name" onChange={handleinput}/>
  <br/>
  Enter fees:<input type='text' name="fees" onChange={handleinput}/>
  <br/>
  Enter city:<input type='text' name="city" onChange={handleinput}/>
  <br/>
  Enter rollno:<input type='text' name="rollno" onChange={handleinput}/>
  <br/>
  <br/>
    <button onClick={handlesubmit}>Submit</button>
  </>
  )
}

export default Insert
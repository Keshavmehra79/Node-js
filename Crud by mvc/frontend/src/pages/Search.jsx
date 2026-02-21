import axios from 'axios';
import React from 'react'
import { useState } from 'react'

function Search() {
  const[rollno,setrollno]=useState("");
const[data,setdata]=useState([])

  const handlesubmit=async ()=>{
    const api=`http://localhost:8000/students/search/?rollno=${rollno}`;
    const res= await axios.get(api);
    setdata(res.data);
  }

  const ans=data.map((key)=>{
    return(<>
    <h1>{key.rollno}</h1>
    <h1>{key.name}</h1>
    <h1>{key.city}</h1>
    <h1>{key.fees}</h1>
    
    </>)
  })
  return (<>
  <hr/>
  Enter rollno:<input type='text' value={rollno} onChange={(e)=>{setrollno(e.target.value)}} /><br/><br/>
  <button onClick={handlesubmit}>Search</button>
  <hr/>
  {ans}
  </>
  )
}

export default Search
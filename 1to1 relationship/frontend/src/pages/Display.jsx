import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Display() {
  const [Data,setMydata]=useState([]);
  const loaddata=async()=>{
    const res=await axios.get("http://localhost:1000/students/display");
    setMydata(res.data);
  }
  useEffect(()=>{
    loaddata()
  },[])

  const ans=Data.map((key)=>{
    return(<>
    
    <tr>
      <td>{key.userid.stuname}</td>
      <td>{key.userid.rollno}</td>
      <td>{key.course}</td>
      <td>{key.fees}</td>
    </tr>
    </>)
  })
  return (
<>
<hr />
<table>
  <tr>
    <th>Stuname</th>
    <th>Rollno</th>
    <th>Course</th>
    <th>Fees</th>
  </tr>
  {ans}
</table>

</>  )
}

export default Display
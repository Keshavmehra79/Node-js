import React, { useEffect, useState } from 'react'
import axios from "axios"
function Display() {
  const [empdata,setempdata]=useState([]);
  const loaddata=async()=>{
    const res=await axios.get("http://localhost:9000/employees/display");
    setempdata(res.data);
  }

  useEffect(()=>{
    loaddata()
  },[])


  const mydel=async(id)=>{
      const res=await axios.delete(`http://localhost:9000/employees/delete/?id=${id}`)
      alert(res.data)
      loaddata();
  }

  const ans=empdata.map((key)=>{
    return(<>
    <tr>
      <td>{key.empname}</td>
      <td>{key.empsalary}</td>
      <td>{key.designation}</td>
      <td>{key.empcity}</td>
      <td>
        <button onClick={()=>{mydel(key._id)}}>Delete</button>
      </td>
    </tr>
    
    </>)
  })
  return (<>
<h2>My data</h2>  

<table>
  <tr>
    <th>Empname</th>
    <th>Empsalary</th>
    <th>Designation</th>
    <th>Empcity</th>
  </tr>
  {ans}
</table>
  </>
  )
}

export default Display
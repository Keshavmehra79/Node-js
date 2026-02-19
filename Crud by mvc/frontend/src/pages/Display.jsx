import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Display() {
  const [Data,setData]=useState([]);
  const loaddata=async ()=>{
    const response=await axios.get("http://localhost:8000/students/display");
    setData(response.data)
  }

  useEffect(()=>{
    loaddata()
  },[])

  const myDel=async (id)=>{
     const res= await axios.get(`http://localhost:8000/students/delete/?id=${id}`);
     alert(res.data.message);
      loaddata();
  }

  const navigate=useNavigate();
  const myedit=(id)=>{
      navigate(`/myedit/${id}`)
  }

  const ans=Data.map((key)=>{
    return(<>
    <tr>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.fees}</td>
      <td>
        <button onClick={()=>{myDel(key._id)}}>Delete</button>
      </td>
      <td>
        <button onClick={()=>{myedit(key._id)}}>Edit</button>
      </td>
    </tr>
    </>)
  })
  return (<>
  <h1>Display Page</h1>

  <table>
    <tr>
      <th>Rollno</th>
      <th>Name</th>
      <th>City</th>
      <th>Fees</th>
    </tr>
    {ans}
  </table>
  </>
  )
}

export default Display
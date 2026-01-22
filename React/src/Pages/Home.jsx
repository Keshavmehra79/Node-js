import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [mydata,setmydata]=useState([]);
    const navigate=useNavigate();

    const loaddata=async ()=>{
        const response=await axios.get("http://localhost:3000/mydata");
        setmydata(response.data);        
    }
    useEffect(()=>{
        loaddata();
    },[]);

    const mydel=async (id)=>{
      await axios.delete(`http://localhost:3000/mydata/${id}`);
      alert("Data deleted.......");
      loaddata();
    }


    const myedit=(id)=>{
            navigate(`/myedit/${id}`);
    }
    
    const ans=mydata.map((key)=>(
        <tr key={key.id}>
            <td>{key.name}</td>
            <td>{key.fees}</td>
            <td>{key.city}</td>
            <td>{key.rollno}</td>
            <td>
                 <button onClick={()=>(mydel(key.id))}>
                Delete
            </button>
            </td>
            <td>
                <button onClick={()=>{myedit(key.id)}}>Edit</button>
            </td>

        </tr>
    ))

  return (<>
  <h1>This is Home..</h1>

  <table>
    <tr>
        <th>Name</th>
        <th>Fess</th>
        <th>City</th>
        <th>Rollno</th>
        <th>
           Delete
        </th>
        <th>Edit</th>
    </tr>
    {ans}
  </table>
  </>
  )
}

export default Home
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Display() {
    const [Data,SetData]=useState([]);
    const loaddata=async()=>{
        const res=await axios.get("http://localhost:9000/students/display");
        SetData(res.data)
    }

    useEffect(()=>{
        loaddata()
    },[])

    const ans=Data.map((key)=>{
        return(<>
        <div style={{"border":"1px solid black",width:"30%",margin:"auto"}}>
            <h2>Rollno: {key.rollno}</h2>
            <h2>Name: {key.name}</h2>
            <h2>City: {key.city}</h2>
            <img src={key.img} alt="" />
        </div>
        
        </>)
    })

  return (<>
<hr />  
{ans}
  </>
  )
}

export default Display
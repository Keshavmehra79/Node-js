import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Myedit() {
    const [mydata,setmydata]=useState({});
    const {id}=useParams();
    const loaddata=async ()=>{
        const response=await axios.get(`http://localhost:3000/mydata/${id}`);
        setmydata(response.data);
    }
    

    const handelinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setmydata(values=>({...values,[name]:value}));        
    }

    const handlesubmit=async ()=>{
            await axios.put(`http://localhost:3000/mydata/${id}`,mydata);
            alert("Data updated...")
    }
    useEffect(()=>{loaddata()},[]);

  return (<>
        Edit name:<input type="text" value={mydata.name} name="name" onChange={handelinput} />
        <br/><br/>
        Edit fees:<input type="text" value={mydata.fees} name="fees"  onChange={handelinput}/>
        <br/><br/>
        Edit city:<input type="text"  value={mydata.city} name="city" onChange={handelinput}/>
        <br/><br/>
        Edit rollno:<input type="text"  value={mydata.rollno} name="rollno" onChange={handelinput}/>
        <br/><br/>
        <button onClick={handlesubmit}>Submit</button>
    
    </>
  )
}

export default Myedit
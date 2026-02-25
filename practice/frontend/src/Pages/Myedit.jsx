import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Myedit() {
    const [mydata,setmydata]=useState({});
    const {id}=useParams();
    const loaddata=async ()=>{
        const res=await axios.get(`http://localhost:9000/employees/myedit/?id=${id}`)
        setmydata(res.data);
    }

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setmydata(values=>({...values,[name]:value}))
    }


    const handelSubmit=async()=>{
        const res=await axios.post(`http://localhost:9000/employees/savedata/?id=${id}`,mydata)
        alert(res.data)
    }

    useEffect(()=>{
        loaddata()
    },[])
  return (<>
  <hr style={{"backgroundColor":"red","padding":"2px"}} />
  Empname: <input type="text" value={mydata.empname} name="empname" onChange={handleChange}/>
  <br/><br/>
  Empsalary: <input type='text' value={mydata.empsalary} name="empsalary" onChange={handleChange}/>
  <br/><br/>
  Designation: <input type='text' value={mydata.designation} name="designation" onChange={handleChange}/>
  <br/><br/>
  City: <input type='text' value={mydata.empcity} name="empcity" onChange={handleChange}/>
  <br/><br/>
<button onClick={handelSubmit}>Update</button>
  </>
  )
}

export default Myedit
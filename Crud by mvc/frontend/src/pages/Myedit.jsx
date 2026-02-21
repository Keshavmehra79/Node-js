import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

function Myedit() {
    const {id}=useParams();
    const[mydata,setmydata]=useState({});
      const loaddata=async()=>{
          let api=`http://localhost:8000/students/myedit/?id=${id}`;          
          const response=await axios.get(api);
          setmydata(response.data)
      }

      useEffect(()=>{
        loaddata()
      },[])
    
  const handelchange=(e)=>{
    let name=e.target.name;
    let val=e.target.value;
    setmydata(values=>({...values,[name]:val}));    
  }

    const handelsubmit=async(e)=>{
    e.preventDefault()
    const api=`http://localhost:8000/students/myupdate`;
    const res=await axios.post(api,mydata);
    alert("Data succefully updated....")
    console.log(res.data);
  }
  return (<>

      <h1>Update data</h1>
         <form onSubmit={handelsubmit} >
     Rollno:<input type="text" name='rollno' value={mydata.rollno}  onChange={handelchange}/><br/><br/>
     Name:<input type="text" name='name'  value={mydata.name} onChange={handelchange}/><br/><br/>
     City :<input type="text" name='city'  value={mydata.city}  onChange={handelchange} /><br/><br/>
     Fees:<input type="text" name='fees'  value={mydata.fees} onChange={handelchange}/><br/><br/>
     <input type="submit" value="Update" />
  </form>
  </>
  )
}

export default Myedit
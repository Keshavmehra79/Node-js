import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

function Myedit() {
    const {id}=useParams();
    const[mydata,setmydata]=useState({});
    const [Data,editeddata]=useState({});
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
    editeddata(values=>({...values,[name]:val}));
    console.log(Data);
    
  }

    const handelsubmit=async(e)=>{
    e.preventDefault()
    const api="http://localhost:8000/students/myedit";
    const res=await axios.post(api,formdata);
    console.log(res);
    alert(res.data);
    
  }
  return (<>

      <h1>Update data</h1>
         <form onSubmit={handelsubmit}>
     Rollno:<input type="text" name='rollno' value={mydata.rollno}  onChange={handelchange}/><br/><br/>
     Name:<input type="text" name='name'  value={mydata.name} onChange={handelchange}/><br/><br/>
     City :<input type="text" name='city'  value={mydata.city}  onChange={handelchange} /><br/><br/>
     Fees:<input type="text" name='fees'  value={mydata.fees} onChange={handelchange}/><br/><br/>
<button type='submit'>Update</button>
  </form>
  </>
  )
}

export default Myedit
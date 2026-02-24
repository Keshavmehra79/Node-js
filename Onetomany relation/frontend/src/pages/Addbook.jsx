import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Addbook() {
    const {id}=useParams();
    const [bookname,setBookname]=useState("")
    const [price,setPrice]=useState("")

    const handleSubmit=async()=>{
        const res=await axios.post("http://localhost:2000/students/addbook",{bookname:bookname,price:price,Authorid:id});
        alert(res.data)
    }
  return (<>
  <hr style={{"backgroundColor":"red","padding":"1px"}} />
  Enter bookname:<input type="text" 
  onChange={(e)=>{setBookname(e.target.value)}}/>
  <br/><br/>
  Enter price:<input type="text"  onChange={(e)=>{setPrice(e.target.value)}} />
  <br/><br/>
  <button onClick={handleSubmit}>Add book</button>
  
  </>
  )
}

export default Addbook
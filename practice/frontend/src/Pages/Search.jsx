import React from 'react'
import { useState } from 'react'
import axios from 'axios';
function Search() {
  const [empcity,setEmpcity]=useState("");
  const [data,setData]=useState([])

    const handelSubmit=async()=>{
        const res=await axios.get(`http://localhost:9000/employees/search/?city=${empcity}`)
        setData(res.data)
    }

    
  return (<>
  <hr style={{"backgroundColor":"red","padding":"2px"}} />
  Enter city:<input type='text' value={empcity} onChange={(e)=>{setEmpcity(e.target.value)}}/>
  <br/><br/>
  <button onClick={handelSubmit}>Search</button>
        <table>
          <tr>
            <th>Empname</th>
            <th>Empsalary</th>
            <th>Designation</th>
            <th>City</th>
          </tr>

      {empcity==""?(<>
      <hr />
      </>):(
       data.map((key)=>{
        return(<>
        <tr>
          <td>{key.empname}</td>
          <td>{key.empsalary}</td>
          <td>{key.designation}</td>
          <td>{key.empcity}</td>
        </tr>
        
        </>)
      })
      )}
        
        </table>
  </>
  )
}

export default Search
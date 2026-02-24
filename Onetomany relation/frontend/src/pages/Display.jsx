import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Display() {
    const [myData,setMydata]=useState([])
    const loaddata=async()=>{
        const res=await axios.get("http://localhost:2000/students/Display")
        setMydata(res.data)
    }

    useEffect(()=>{
        loaddata()
    },[])

    const navigate=useNavigate();
    const ans=myData.map((key)=>{
        return(<>
        <tr>
            <td>{key.authorname}</td>
            <td>{key.email}</td>
            <td>
                {key.books.map((key1)=>{
                    return(<>
                        <p style={{marginLeft:"50px"}}>Name: {key1.bookname},  Price: {key1.price}  </p>
                        </>)
                })}
            </td>
            <td>
                <button onClick={()=>{navigate(`/addbook/${key._id}`)}}>Add more book</button>
            </td>
        </tr>
        
        </>)
    })

  return (<>
  <hr style={{"backgroundColor":"red","padding":"1px"}} />
        <table >
            <tr>
                <th>Authorname</th>
                <th>Email</th>
                <th>Bookname,Price</th>
            </tr>
            {ans}
        </table>
  </>
  )
}

export default Display
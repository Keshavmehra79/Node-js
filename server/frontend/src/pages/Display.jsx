import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const loaddata=async ()=>{
        let api ="http://localhost:8000/students/display";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loaddata();
    },[]);
    
      const ans =mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.age}</td>
                <td>{key.city}</td>
                <td>{key.address}</td>
            </tr>

            
            </>

        )
      })
      return(
        <>
        <h1>Display student records</h1>

        <table border="">
            <tr>
                <th>name</th>
                <th>age</th>
                <th>city</th>
                <th>address</th>
            </tr>
            {ans}
        </table>
        
        </>
      )
        
      
}
export default Display;
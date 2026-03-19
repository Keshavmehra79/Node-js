import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';

function Home() {
  const userAuth=async()=>{
    const token=await localStorage.getItem("token");
    if(token){
         let api="http://localhost:9000/user/userauth"; 
      const res=await axios.post(api,null,{headers:{"mytoken":token}})
      console.log(res)
    }
  }

  useEffect(()=>{
    userAuth()
  },[])
  return (<>
  <h1 className='text-2xl font-bold'> Home page</h1>
  </>
  )
}

export default Home
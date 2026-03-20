import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const nav=useNavigate();
  const userAuth=async()=>{
    const token=await localStorage.getItem("token");
    if(token){
         let api="http://localhost:9000/user/userauth"; 
      const res=await axios.post(api,null,{headers:{"mytoken":token}})
      localStorage.setItem("name",res.data.user.name);
      localStorage.setItem("email",res.data.user.email);
      nav("/dashboard")
    }
  }

  useEffect(()=>{
    userAuth()
  },[])
  return (<>
   {/* Hero Section */}
  <section className="bg-gray-100 text-center py-20">
    <h1 className="text-4xl font-bold mb-4">Welcome To Home Page</h1>
    <p className="text-gray-600 mb-6">
      Build amazing web applications using MERN Stack 🚀
    </p>
 
  </section>

  {/* Cards Section */}
  <section className="grid md:grid-cols-3 gap-6 px-6 py-10">
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
      <h2 className="text-xl font-semibold mb-2">Fast</h2>
      <p className="text-gray-500">High performance and optimized UI.</p>
    </div>

    <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
      <h2 className="text-xl font-semibold mb-2">Responsive</h2>
      <p className="text-gray-500">Works on all devices seamlessly.</p>
    </div>

    <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
      <h2 className="text-xl font-semibold mb-2">Secure</h2>
      <p className="text-gray-500">Your data is safe and protected.</p>
    </div>
  </section>
  </>
  )
}

export default Home
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Insert() {
  const [formdata,setFormdata]=useState({});

  const handelchange=(e)=>{
    let name=e.target.name;
    let val=e.target.value;
    setFormdata(values=>({...values,[name]:val}));
    console.log(formdata);
    
  }

  const handelsubmit=async(e)=>{
    e.preventDefault()
    const api="http://localhost:8000/students/savedata";
    const res=await axios.post(api,formdata);
    console.log(res);
    alert(res.data);
    
  }
  
  return (<>
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
      
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Student Registration
      </h2>

      <form onSubmit={handelsubmit} className="space-y-4">
        
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Enter Roll No
          </label>
          <input
            type="text"
            name="rollno"
            onChange={handelchange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Enter Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handelchange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Enter City
          </label>
          <input
            type="text"
            name="city"
            onChange={handelchange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Enter Fees
          </label>
          <input
            type="text"
            name="fees"
            onChange={handelchange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>

      </form>
    </div>

  </div>
);
  </>)

}

export default Insert
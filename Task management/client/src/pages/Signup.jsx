import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Signup() {
    // const [input, setinput] = useState({})
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [usertype,setUsertype]=useState("");
    console.log(usertype);
    

    const navigate=useNavigate();

   

    const handleSubmit = async(e) => {
      if(usertype=="Admin"){
          try {
            let api=`${import.meta.env.VITE_API_URL}/admin/signup`;
            const response=await axios.post(api,{email:email,password:password});
            console.log(response)

            
          } catch (error) {
              console.log(error)
          }
      }
        
    }
    return (<>
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    
    <h2 className="text-2xl font-bold text-center mb-6">Create an account </h2>

    <div className="space-y-4">
      
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="text"
          name="email"
          onChange={(e)=>{setEmail(e.target.value)}}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="text"
          name="password"
          onChange={(e)=>{setPassword(e.target.value)}}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Login as
        </label>
        
        
          <select name ="usertype" onChange={(e)=>{setUsertype(e.target.value)}}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

            >
        <option >Open this select menu</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>

    </div>
  </div>
</div>
    </>
    )
}

export default Signup
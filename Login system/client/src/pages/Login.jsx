import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Login() {
    const [input, setinput] = useState({})
    const navigate=useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        setinput(values => ({ ...values, [name]: val }))
    }

    const handleSubmit = async() => {
        try {
            const res = await axios.post("http://localhost:9000/user/login", input);
            localStorage.setItem("token",res.data.token)
            toast.success("You are logged in!")

        } catch (error) {
            console.log(error.response.data)
            toast.error(error.response.data)
        }
    }
    return (<>
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
    
    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

    <div className="space-y-4">

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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

export default Login
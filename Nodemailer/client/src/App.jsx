import React, { useState } from 'react'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
function App() {
    const [input, setinput] = useState({})

    const handleChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        setinput(values => ({ ...values, [name]: val }))
        console.log(input);
        
    }

    const handleSubmit = async() => {
        try {
            
            const res = await axios.post("http://localhost:9000/user/sendemail", input);
            console.log(res);
            toast.success("Email sent succefully")
        } catch (error) {
            console.error(error)
        }
    }
    return (<>

       <ToastContainer />
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    
    <h2 className="text-2xl font-bold text-center mb-6">Create an account </h2>

    <div className="space-y-4">
      
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your subject"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />

         <label className="block text-sm font-medium text-gray-700">
          Mobile
        </label>
        <input
          type="text"
          name="mobile"
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your Number"
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

export default App
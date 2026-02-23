import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Display() {
  const [Data,setData]=useState([]);
  const loaddata=async ()=>{
    const response=await axios.get("http://localhost:8000/students/display");
    setData(response.data)
  }

  useEffect(()=>{
    loaddata()
  },[])

  const myDel=async (id)=>{
     const res= await axios.get(`http://localhost:8000/students/delete/?id=${id}`);
     alert(res.data.message);
      loaddata();
  }

  const navigate=useNavigate();
  const myedit=(id)=>{
      navigate(`/myedit/${id}`)
  }

const ans = Data.map((key) => {
  return (
    <tr key={key._id} className="text-center border-b hover:bg-gray-100">
      <td className="py-3 px-4">{key.rollno}</td>
      <td className="py-3 px-4">{key.name}</td>
      <td className="py-3 px-4">{key.city}</td>
      <td className="py-3 px-4">{key.fees}</td>
      <td className="py-3 px-4">
        <button
          onClick={() => { myDel(key._id) }}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </td>
      <td className="py-3 px-4">
        <button
          onClick={() => { myedit(key._id) }}
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
        >
          Edit
        </button>
      </td>
    </tr>
  );
});

return (
  <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
    <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6">

      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Student Data
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4">Rollno</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">City</th>
              <th className="py-3 px-4">Fees</th>
              <th className="py-3 px-4">Delete</th>
              <th className="py-3 px-4">Edit</th>
            </tr>
          </thead>

          <tbody>
            {ans}
          </tbody>

        </table>
      </div>

    </div>
  </div>
);
}

export default Display
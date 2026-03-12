import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
function Display() {
    const [mydata,setMydata]=useState([]);
    const [select,setSelect]=useState("");

    const loaddata=async()=>{
    const response=await axios.get("http://localhost:9000/students/display")
    setMydata(response.data);
    }

    useEffect(()=>{
        loaddata()
    },[])

const ans = mydata.map((key) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-5 mb-6 border">

      <div className="space-y-1 mb-4">
        <h4 className="text-lg font-semibold text-gray-700">
          Rollno: <span className="text-gray-900">{key.rollno}</span>
        </h4>

        <h4 className="text-lg font-semibold text-gray-700">
          Name: <span className="text-gray-900">{key.name}</span>
        </h4>

        <h4 className="text-lg font-semibold text-gray-700">
          City: <span className="text-gray-900">{key.city}</span>
        </h4>
      </div>

      {/* Default Image */}
      <div className="mb-4">
        <img
          src={select?(select):(key.defaultImage)}
          alt=""
          className="w-full h-56 object-cover rounded-lg"
        />
      </div>

      {/* Multiple Images */}
      <div className="grid grid-cols-3 gap-3">
        {key.images.map((key1) => {
          return (
            <div className="overflow-hidden rounded-lg">
              <img
                src={key1}
                alt=""
                onClick={()=>{setSelect(key1)}}
                className="w-full h-24 object-cover hover:scale-110 transition duration-300"
              />
            </div>
          );
        })}
      </div>

    </div>
  );
});

  return (<>
  <hr />
  {ans}
 </>
  )
}

export default Display
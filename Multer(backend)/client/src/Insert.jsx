import axios from 'axios'
import React, { useState } from 'react'
function Insert() {
    const [input,setInput]=useState({})
    const [images,setImage]=useState([])
 
    const setImg=(e)=>{
  setImage([...e.target.files]);
}

    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values,[name]:value}));
    }
    const handleSubmit=async()=>{
        const formdata=new FormData();
        for(let key in input){
          formdata.append(key,input[key])
        } 
        
        for (let i=0;i<images.length;i++){
          formdata.append('images',images[i])
        }
     

        let api='http://localhost:9000/students/stusave';
        const response=await axios.post(api,formdata,{
  headers:{
    "Content-Type":"multipart/form-data"
  }
});
        console.log(response.data);
        
    }
  return (<>
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">

  <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
    Upload Student Data
  </h2>

  <div className="space-y-4">

    <div>
      <label className="block text-gray-600 font-medium">Enter Rollno</label>
      <input
        type="text"
        name="rollno"
        onChange={handleInput}
        className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label className="block text-gray-600 font-medium">Enter Name</label>
      <input
        type="text"
        name="name"
        onChange={handleInput}
        className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label className="block text-gray-600 font-medium">Enter City</label>
      <input
        type="text"
        name="city"
        onChange={handleInput}
        className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label className="block text-gray-600 font-medium">Upload Images</label>
      <input
        type="file"
        multiple
        onChange={setImg}
        className="w-full border rounded-lg p-2 mt-1 cursor-pointer"
      />
    </div>

    <button
      onClick={handleSubmit}
      className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
    >
      Upload File
    </button>

  </div>

</div>
  
  </>
  )
}

export default Insert
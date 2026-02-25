import axios from 'axios';
import React, { useState } from 'react'

function App() {
  const [image,setimage]=useState("")

  const handleImage=(e)=>{
      setimage(e.target.files[0])
  }

  const handleSubmit=async()=>{
    const formdata=new FormData();
    formdata.append("myimage",image)
    const res=await axios.post("http://localhost:9000/students/upload",formdata);
    console.log(res.data)
  }
  return (<>
  <h1>File uploading with multer...</h1>
  Upload Image: <input type='file' onChange={handleImage}/>
  <button onClick={handleSubmit}>Upload</button>
  </>
  )
}

export default App
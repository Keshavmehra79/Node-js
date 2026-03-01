import axios from 'axios'
import React, { useState } from 'react'
function Insert() {
   const [input,setInput]=useState({})
    const [image,setImage]=useState([])
  
  
    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values,[name]:value}));
    }
    const handleSubmit=async()=>{
      let api="http://localhost:9000/students/upload";
      const formdata=new FormData();
      for (let key in input){
        formdata.append(key,input[key])
      }

      for(let i=0;i<image.length;i++){
        formdata.append('images',image[i])
      }

      const res=await axios.post(api,formdata)
      console.log(res.data);
      
      // formdata.append("file",image);
      // formdata.append("upload_preset","vedantpre")
      // formdata.append("cloud_name","ddmc42iwn")
      // const res= axios.post(" https://api.cloudinary.com/v1_1/ddmc42iwn/image/upload",formdata)
      // setImage(res.data.url)
      // const res1=await axios.post(api,{...input,myimg:image})
      // alert(res1.data)
    }
  return (<>
  
    <hr />
    Enter rollno:<input type='text' name='rollno' onChange={handleInput}/>
    <br /><br />
    Enter name:<input type='text' name='name' onChange={handleInput}/>
    <br /><br />
    Enter city:<input type='text' name='city' onChange={handleInput}/>
    <br /><br />
  
    Upload image: <input type="file" multiple onChange={(e)=>(setImage(e.target.files))}  />
    <br /><br />
    <button onClick={handleSubmit}>Save file</button>
  
  
  
  </>
  )
}

export default Insert
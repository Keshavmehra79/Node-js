import axios from 'axios';
import React from 'react'
import { useState } from 'react';
axios.defaults.withCredentials=true;
function Home() {
    const [input, setinput] = useState({})
    
    const handelChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        setinput(values => ({ ...values, [name]: val }))
        
    }
       const handleSubmit = async() => {
        try {
            const res = await axios.post("http://localhost:8000/session/login", input);
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (<>
  
  <h1>This is Home page......</h1>
  <hr />

    Enter name:<input type="text" name="name" onChange={handelChange} />
  <br/><br/>
  Enter email:<input type="text" name="email" onChange={handelChange}/>
  <br/><br/>
  Enter mobile:<input type="text" name='mobile' onChange={handelChange}/>
  
  <br/><br/>    
  <button onClick={handleSubmit}>Submit</button>
  </>
  )
}

export default Home
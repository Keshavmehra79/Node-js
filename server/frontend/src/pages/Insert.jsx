import { useState } from "react"
import axios from 'axios'
const Insert = () => {
    const [input,setinput]=useState({});
    const handlechange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setinput(values=>({...values,[name]:value}));
        console.log(input)
    }


    const handlesubmit=async (e)=>{
        e.preventDefault();
        let api='http://localhost:8000/students/save';
        const response=await axios.post(api,input);
        console.log(response);
        alert(response.data.msg);

    }


    return (
        <>
            <h1>This is insert page</h1>
            <form onSubmit={handlesubmit}>
                Enter name : <input type="text" name="name" onChange={handlechange} /><br></br>
                Enter Age : <input type="text"   name="age"  onChange={handlechange}/><br></br>
                Enter Address : <input type="text" name="address"  onChange={handlechange}/><br></br>
                Enter City : <input type="text" name="city"  onChange={handlechange}/><br></br>
                <input type="submit" />
            </form>
        </>
    )

}
export default Insert
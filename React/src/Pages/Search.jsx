import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function Search() {
  const [rollno, setrollno] = useState("");
  const [mydata, setmydata] = useState([]);

  const handlesubmit = async () => {
    const response = await axios.get(`http://localhost:3000/mydata/?rollno=${rollno}`);
    setmydata(response.data);
  }

  const ans = mydata.map((key) => {
    return (<>
      <h3>
        {key.name}
      </h3>
      <h3>{key.fees}</h3>
      <h3>{key.city}</h3>
      <h3>{key.rollno}</h3>
    </>
    )
  })
  return (<>
    <h1>This is Search</h1>
    <hr />
    Enter Rollno: <input type="text" value={rollno}
      onChange={(e) => { setrollno(e.target.value) }} />
    <br /><br />
    <button onClick={handlesubmit}>Search</button>
    {ans}
  </>
  )
}

export default Search
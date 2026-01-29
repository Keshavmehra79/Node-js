import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeColor } from './Pages/todoSlice';
import { useState } from 'react';

function App() {
  const [val, setval] = useState("");
  const clr = useSelector(state => state.mycolor.color);
  const dispatch = useDispatch();
  return (<>
    <h1>Wellcome in this web...</h1>
    <hr />
    Enter Number :<input type="text"
      value={val}
      onChange={(e) => { setval(e.target.value) }} />

    <br /><br />
    <button onClick={() => { dispatch(changeColor({txt:val})) }}>Change color</button>
    <br /><br />
    <div style={{ "height": "200px", "width": "200px", "backgroundColor": clr }}>

    </div>





  </>
  )
}

export default App
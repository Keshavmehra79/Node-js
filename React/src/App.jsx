import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { kuchbhi } from './Pages/counterSlice';
function App() {
  const clr=useSelector((state)=>state.bgcolor.color);
  const dispatch=useDispatch();
  return (<>
  <h1>Wellcome in this web.....</h1>
  <hr/>
  <button onClick={()=>{dispatch(kuchbhi())}}>Change color</button>
<div style={{backgroundColor:clr,width:"400px",height:"300px"}}>
hello
</div>

  </>
  )
}

export default App
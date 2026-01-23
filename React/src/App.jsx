import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { changeTheme } from './Pages/counterSlice';
function App() {
  const clr=useSelector((state)=>state.changecolor.color)
  const dispatch=useDispatch();
 return(
  <>
  <h1>Wellcome in this web.......</h1>
  <ht/>
  <button onClick={()=>{dispatch(changeTheme())}}>Change color</button>
    <br/>
    <br/>
  <div style={{backgroundColor:clr,width:"200px",height:"300px"}}>

  </div>
  
  
  </>
 )
}

export default App
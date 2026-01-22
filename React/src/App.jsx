import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Decrement, Increment } from './Pages/counterSlice';
function App() {
  const myans=useSelector((state)=>state.mycounter.count);
  const dispatch=useDispatch();
  return (<>
  <h1>Wellcome in this web.....</h1>
  <hr/>

  <button onClick={()=>{dispatch(Increment())}}>Increment</button>
  <h1>{myans}</h1>
  <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
  </>
  )
}

export default App
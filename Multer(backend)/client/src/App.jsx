import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Display from './Display'
import Insert from './Insert'
function App() {
  return (<>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Insert/>}/>
      <Route path='/display' element={<Display/>}/>
      
      </Route>

  </Routes>
  
  </BrowserRouter>
  </>
  )
}

export default App




/////////////ERROR HAnDLING
// import React from 'react'
// import axios from 'axios'
// const handleHome=async()=>{
//   const res=await axios.get("http://localhost:4000/home")
//   console.log(res)
// }
// const handleAbout=async()=>{
//   const res=await axios.get("http://localhost:4000/about")
//   console.log(res.data)
// }
// function App() {
//   return (<>
//   <h1>Hello this is app</h1>
//   <button onClick={handleHome}>Home</button>
//   <button onClick={handleAbout}>About</button>
//   </>
//   )
// }

// export default App
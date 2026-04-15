import React from 'react'
import Layout from './Layout'
import Display from './Display'
import Home from './Home'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
function App() {
  return (<>
  <BrowserRouter>  <Routes>
   <Route path="/" element={<Layout/>}>
   <Route index element={<Home/>}/>
   <Route path="/display" element={<Display/>}/>
   </Route>

  </Routes></BrowserRouter>

  </>
  )
}

export default App
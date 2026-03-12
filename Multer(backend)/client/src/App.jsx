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
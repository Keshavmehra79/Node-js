import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Insert from './pages/Insert'
import Display from './pages/Display'
import Layout from './pages/Layout'
const App = () => {
  return (<>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>  
      <Route path="/display" element={<Display/>}/>
      <Route path="/insert" element={<Insert/>}/>


      </Route>
    </Routes>
    
    </BrowserRouter>
  </>
  )
}

export default App
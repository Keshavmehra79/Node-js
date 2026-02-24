import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Insert from './pages/Insert'
import Display from './pages/Display'
import Layout from './pages/Layout'
import Addbook from './pages/Addbook'
const App = () => {
  return (<>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>  
      <Route path="/display" element={<Display/>}/>
      <Route path="/insert" element={<Insert/>}/>

        <Route path="/addbook/:id" element={<Addbook/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
  </>
  )
}

export default App
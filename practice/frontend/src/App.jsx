import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Dashboard from './Dashboard'
import Product from './Pages/Product'
import Services from './Pages/Services'


function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route  index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>

    <Routes>
      <Route path='dashboard' element={<Dashboard/>}>
          <Route path='product' element={<Product/>}/>
          <Route path='service' element={<Services/>}/>
      </Route>

    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App



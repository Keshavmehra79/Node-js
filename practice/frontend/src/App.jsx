import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Insert from './Pages/Insert'
import Display from './Pages/Display'
import Update from './Pages/Update'
import Search from './Pages/Search'
import Myedit from './Pages/Myedit'

function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/home" index element={<Home/>}/>
      <Route path="/" index element={<Home/>}/>
      <Route path="/insert" element={<Insert/>}/>
      <Route path="/display" element={<Display/>}/>
      <Route path="/update" element={<Update/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path='/myedit/:id' element={<Myedit/>}/>

      </Route>
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
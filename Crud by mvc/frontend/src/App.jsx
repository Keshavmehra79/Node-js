import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Insert from './pages/Insert'
import Home from './pages/Home'
import Display from './pages/Display'
import UPdate from './pages/UPdate'
import Contact from './pages/Contact'
import Search from './pages/Search'
import Myedit from './pages/Myedit'
function App() {
  return (<>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='insert' element={<Insert/>}/>
      <Route path='display' element={<Display/>}/>
      <Route path='update' element={<UPdate/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='myedit/:id' element={<Myedit/>}/>

    </Route>
  </Routes>
  </BrowserRouter>
  
  </>
  )
}

export default App
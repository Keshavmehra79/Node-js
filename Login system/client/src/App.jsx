import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
 <>
 <ToastContainer/>
<BrowserRouter>
<Routes>
    <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='registration' element={<Registration/>}/>
        <Route path='login' element={<Login/>}/>

    </Route>

</Routes>
</BrowserRouter>
 </>
  )
}

export default App
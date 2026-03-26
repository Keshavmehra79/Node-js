import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Admindashboard from './admin/Admindashboard'
import Product from './admin/Product'
import { ToastContainer, toast } from 'react-toastify';
import Services from './admin/Services'
// import Services from './pages/admin/Services'



function App() {
  return (
 <>
 <ToastContainer/>
<BrowserRouter>
<Routes>
    <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='registration' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>

    </Route>

</Routes>

<Routes>
    <Route path='dashboard' element={<Admindashboard/>}>
        <Route path='product' element={<Product/>}/>
        <Route path='service' element={<Services/>}/>
        </Route>
    </Routes>
</BrowserRouter>
 </>
  )
}

export default App
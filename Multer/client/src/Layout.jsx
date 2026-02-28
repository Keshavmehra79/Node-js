import React from 'react'
import { Link,Outlet } from 'react-router-dom'
function Layout() {
  return (<>
  <nav>
    <Link to="/"       style={{"margin":"10px"}}>Home</Link>
    <Link to="/insert" style={{"margin":"10px"}}>Insert</Link>
    <Link to="/display"style={{"margin":"10px"}}>Display</Link>
  </nav>
  <Outlet/>
  </>
  )
}

export default Layout
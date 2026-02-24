import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Layout() {
  return (<><nav>
  <Link to="/insert" style={{"margin":"20px","font-size":"20px"}}>Insert</Link>
  <Link to="/display" style={{"margin":"20px","font-size":"20px"}}>Display</Link></nav>
  <Outlet/>

  
  </>
  )
}

export default Layout
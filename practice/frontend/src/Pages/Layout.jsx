import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (<>
  <Link to="home">Home     </Link>
  <Link to="signup">Signup</Link>
  <Link to="login">Login   </Link>
  <Outlet/>
  </>
  )
}

export default Layout
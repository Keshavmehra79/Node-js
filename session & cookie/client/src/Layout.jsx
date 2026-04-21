import { Link, Outlet } from "react-router-dom";

import React from 'react'

function Layout() {
  return (<>
  <hr/>
  <Link to="/">Home|</Link>
  <Link to="/display">Display|</Link>
  <Link to="/login">Login|</Link>
  <Outlet/>
  </>
  )
}

export default Layout
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (<>
  <Link to="home">Home     </Link>
  <Link to="insert">Insert    </Link>
  <Link to="display">Display   </Link>
  <Link to="update">Update    </Link>
  <Link to="search">Search    </Link>
  <Outlet/>
  </>
  )
}

export default Layout
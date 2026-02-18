import React from 'react'
import { Outlet,Link } from 'react-router-dom'


function Layout() {
  return (<>
  <Link to="home">Home           </Link>
  <Link to="insert">Insert       </Link>
  <Link to="display">Display     </Link>
  <Link to="update">UPdate       </Link>
  <Link to="search">Search       </Link>
  <Link to="contact">Contact     </Link>
  <Outlet/>
  </>
  )
}

export default Layout
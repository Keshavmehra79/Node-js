import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function Layout() {
  return (<>
  <hr />
  <Link to="/">Insert</Link>
  <Link to="/display">Display</Link>
  <Outlet/>
  </>
  )
}

export default Layout
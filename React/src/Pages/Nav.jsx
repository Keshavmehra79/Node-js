import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (<>
  <nav>
    <ul style={{"display":"flex","listStyle":"none","gap":"10px"}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/insert">Insert</Link></li>
        <li><Link to="/update">Update</Link></li>
        <li><Link to="/search">Search</Link></li>
    </ul>
  </nav>
  
  </>
  )
}

export default Nav
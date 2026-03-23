import React, { useEffect } from 'react'
import { Link,Outlet, useNavigate } from 'react-router-dom'
function Dashboard() {
  const nav=useNavigate();
  const logOut=()=>{
    localStorage.clear();
    nav("/login")
  }

  useEffect(()=>{
 if(!localStorage.getItem("name")){
    nav("/home")
  }
  },[])
  return (<>
  <h1>Wellcome to dashboard</h1>
  <hr />
  <Link to="product">Product</Link>
  <Link to="service">Service</Link>
  <hr />
  <button onClick={logOut}>Logout</button>
  <Outlet/>
  www.mycompny.com
  </>
  )
}

export default Dashboard
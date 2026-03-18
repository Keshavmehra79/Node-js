import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
function Dashboard() {
    const navigate=useNavigate();
   const logOut=()=>{
    localStorage.clear();
        navigate("/login")
   }
  return (
    <>
  {/* Header */}
  <div className="bg-blue-500 text-white p-5 shadow-md">
    <h1 className="text-2xl font-bold">Welcome To Dashboard</h1>
  </div>

  {/* User Info */}
  <div className="bg-blue-200 p-4 text-center shadow">
    <h2 className="text-lg font-semibold">
      Welcome {localStorage.getItem("name")}
    </h2>

    <h2 className="mt-2">
      Email: {localStorage.getItem("email")}
    </h2>

    <button
    onClick={logOut}
      className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
    >
      Logout
    </button>
  </div>

  {/* Dashboard Layout */}
  <div className="flex h-[80vh]">
    
    {/* Sidebar */}
    <div className="w-1/5 bg-gray-800 text-white p-5">
      <h2 className="text-xl font-bold mb-5">Menu</h2>

      <ul className="space-y-4">
        <li>
          <Link
            to="product"
            className="block hover:bg-gray-700 p-2 rounded"
          >
            Product
          </Link>
        </li>

        <li>
          <Link
            to="service"
            className="block hover:bg-gray-700 p-2 rounded"
          >
            Services
          </Link>
        </li>
      </ul>
    </div>

    {/* Main Content */}
    <div className="w-4/5 p-6 bg-gray-100 overflow-auto">
      <Outlet />
    </div>

  </div>
</>
  )
}

export default Dashboard
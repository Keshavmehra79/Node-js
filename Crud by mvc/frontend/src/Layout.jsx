import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import { useState } from "react";


function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (<>



    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          <h1 className="text-xl font-bold">MyApp</h1>

          <div className="hidden md:flex space-x-6">
           <Link to="home">Home</Link>
            <Link to="insert">Insert  </Link>
            <Link to="display">Display</Link>
            <Link to="update">UPdate  </Link>
            <Link to="search">Search  </Link>
            <Link to="contact">Contact</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-3 pb-4">
               <Link to="home">Home</Link>
            <Link to="insert">Insert  </Link>
            <Link to="display">Display</Link>
            <Link to="update">UPdate  </Link>
            <Link to="search">Search  </Link>
            <Link to="contact">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  



  <Outlet/>
  </>
  )
}

export default Layout
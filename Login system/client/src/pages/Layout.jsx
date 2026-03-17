import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <div className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyCompany</h1>

        <div className="space-x-6">
          <Link to="home" className="hover:text-yellow-400">Home</Link>
          <Link to="registration" className="hover:text-yellow-400">Registration</Link>
          <Link to="login" className="hover:text-yellow-400">Login</Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-gray-100">
        <Outlet />
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white text-center py-3">
        www.mycompany.com
      </div>

    </div>
  );
}

export default Layout;
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div>
            <nav> <Link to="/">Home</Link>
                <Link to="/insert">Insert</Link>
                <Link to="/display">Display</Link>
            </nav>

            <Outlet />
        </div>
    )
}
export default Layout
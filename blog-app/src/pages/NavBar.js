import './NavBar.css';
import { Outlet, Link } from "react-router-dom";

function NavBar(){
    return(
        <div className='header'>
        <Link to='/'>
            <div>
              Logo
            </div>
        </Link>

        <nav>
        <ul>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/post">"Post (tam thoi xoa sau)"</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>
        </ul>
      </nav>
            <Outlet/>
        </div>
        
    )
}

export default NavBar
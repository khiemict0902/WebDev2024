import './NavBar.css';
import { Outlet, Link } from "react-router-dom";



function NavBar() {
  return (
    <>
      <div className='header'>


        <nav className='navD'>
          <ul>
            <Link className='link' to='/'>
              <div className='logo'>
                Logo
              </div>
            </Link>
          </ul>
          <ul className='ul links'>
            <li className='li'>
              <Link className='link' to="/blogs">Blogs</Link>
            </li>
            <li className='li'>
              <Link className='link' to="/post">"Post (tam thoi xoa sau)"</Link>
            </li>
            <li className='li'>
              <Link className='link' to="/categories">Categories</Link>
            </li>
            <li className='li'>
              <Link className='link' to="/aboutus">About us</Link>
            </li>
          </ul>
        </nav>
        {/* <Outlet/> */}
      </div>
    </>

  )
}

export default NavBar
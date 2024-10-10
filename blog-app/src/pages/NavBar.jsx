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
            <ul className='ul links navigation_part'>
              <li className='li'>
                <Link className='link' to="/blogs">Blogs</Link>
              </li>
              <li className='li'>
                <Link className='link' to="/post">"Post (tam thoi xoa sau)"</Link>
              </li>
              <li className='li categories'>
                <Link className='link'>Categories</Link>
                <div className="category_list_container">
                  <ul className="category_list">  
                    <li className="category_item"><a href="./Categories" className="category_link">Type I</a></li>
                    <li className="category_item"><a href="./Categories" className="category_link">Type I</a></li>
                    <li className="category_item"><a href="./Categories" className="category_link">Type I</a></li>
                  </ul>
                
                </div>
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
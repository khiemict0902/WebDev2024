import './NavBar.css';
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import logo from '../assets/Logo.png'
import user_ava from '../assets/user_ava.png'




function NavBar() {
  return (
    <>   
      <div className='header'>

        <div className="logo_and_search">

          <div className="logo_and_search-container">
            <Link to='/aboutus' className="logo_image">
              <img src={logo} alt="" />
            </Link>

            <div className="search_bar_left">
              <FontAwesomeIcon className='search_icon' icon={faMagnifyingGlass} />
              <input class="search_input" type="search" placeholder='Search' />
            </div>
          </div>

        </div>

        <div className="search_bar_right">
          <Link className='link' to='/search'>
            <FontAwesomeIcon className='search_icon' icon={faMagnifyingGlass} />
          </Link>
        </div>

        <div className="div home_page">
          <Link className="link" to='/blogs'>
              <span>Blogs</span>
          </Link>
        </div>
         
        <div className="create_post">
          <Link className='link' to = '/write'>
            <FontAwesomeIcon className='create_icon' icon={faPenToSquare} />
            <span className="link_text">Write</span>
          </Link>
        </div>
        

        <div className="notification">
          <Link className='link' to='/notification'>
            <FontAwesomeIcon className='notification_icon' icon={faBell} />
          </Link>
        </div>

        <div className="user">
          <Link className='link' to='/profile'>
            <img src={user_ava} alt="" className="user_image" /> 
          </Link>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default NavBar

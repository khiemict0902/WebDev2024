import './NavBar.css';
import { useState, useEffect, useRef } from 'react'
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/Logo.png'
import user from '../assets/user.png'




function NavBar(isAdmin) {

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null); 
  const avatarRef = useRef(null); 

 
  const handleAvatarClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Đóng menu khi nhấn ra ngoài
  const handleClickOutside = (event) => {
    if (
      menuRef.current && 
      !menuRef.current.contains(event.target) && 
      !avatarRef.current.contains(event.target)
    ) {
      setIsMenuVisible(false); // Ẩn menu khi nhấn ra ngoài
    }
  };

  // Sử dụng useEffect để lắng nghe sự kiện click ngoài
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    // Dọn dẹp sự kiện khi component bị hủy
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='header'>

        <div className="logo_and_search">

          <div className="logo_and_search-container">
            <Link to='/blogs' className="logo_image">
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

        {isAdmin &&
          <>
            <div className="create_post">
              <Link className='link' to = '/write'>
                <FontAwesomeIcon className='create_icon' icon={faPenToSquare} />
                <span className="link_text">Write</span>
              </Link>
            </div>
          </>
        }

        <div className="notification">
          <Link className='link' to='/notification'>
            <FontAwesomeIcon className='notification_icon' icon={faBell} />
          </Link>
        </div>

        <div className="user">
          <button className="user_button">
            <img ref={avatarRef} onClick={handleAvatarClick} src={user} alt="" className="user_image" /> 
          </button>
          {isMenuVisible && (
            <div ref={menuRef} className="user_menu">
              <ul className="user_menu-list">  
                <li className="user_menu_item user_menu-create_post">
                  <Link className='link' to = '/write'>
                    <FontAwesomeIcon className='link_icon' icon={faPenToSquare} />
                    <span className="link_text">Write</span>
                  </Link>
                </li>
                <li className="user_menu_item">
                  <Link to ="./profile" className="profile_link link">    
                    <FontAwesomeIcon className='link_icon' icon={faUser} />
                    <span className="link_text">
                      Profile
                    </span>
                  </Link>
                </li>
                <li className="user_menu_item">
                  <Link to ="./recently_deleted" className="profile_link link">    
                    <FontAwesomeIcon className='link_icon' icon={faTrashCan} />
                    <span className="link_text">
                      Recently deleted
                    </span>
                  </Link>
                </li>
                <li className="user_menu_item">
                  <Link to ="./aboutus" className="profile_link link">    
                    <FontAwesomeIcon className='link_icon' icon={faArrowRightFromBracket} />
                    <span className="link_text">
                      Logout
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          )}    
        </div>
          
      </div>
    </>

  )
}

export default NavBar

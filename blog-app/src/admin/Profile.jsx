import './Profile.css'
import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar'
import user_ava from '../assets/user_ava.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import PostHomeCard from '../components/PostHomecard';


function Profile(isAdmin) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const menuRef = useRef(null); 
    const iconrRef = useRef(null); 
  
   
    const handleIconClick = () => {
      setIsMenuVisible(!isMenuVisible);
    };
  
    // Đóng menu khi nhấn ra ngoài
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) && 
        !iconrRef.current.contains(event.target)
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

    return(
        <>
            <header>
                <NavBar />
            </header>

            <div className="profile_container">
                <div className="profile_content_left">
                    <div className="profile_header">
                        <div className="profile_infor-left">
                            <img src={user_ava} className='profile_user_image-left' alt="user image" />
                            <span className="profile_user_name-left">Nguyenhai</span>
                        </div>
                        <button ref={iconrRef} onClick={handleIconClick} className="profile_menu">
                            <FontAwesomeIcon className='profile_menu-icon' icon={faEllipsis} style={{color: "#6b6b6b",}} /> 
                            {isMenuVisible && (
                                <div className="profile_menu-container">
                                    <ul className="profile_menu-list">
                                        <li className='profile_menu-item'>Copy link</li>
                                        <li className='profile_menu-item'><Link className='edit_profile_link' to='/setting'>Edit profile</Link></li>
                                    </ul>
                                </div>  
                            )} 
                        </button>
                    </div>
                    <p className="profile_bio_left">Short bio about me</p>

                    <div className="profile_sub_content">
                        <div className="profile_content-nav">
                            <div className="profile_content-nav-item">
                                <Link className="profile_content-nav_link active">Home</Link>
                            </div>
                            <div className="profile_content-nav-item">
                                <Link className="profile_content-nav_link">About</Link>
                            </div>
                        </div>
                        <div className="published_post-list_container">
                            <PostHomeCard/>
                            <PostHomeCard/>
                            <PostHomeCard/>
                            <PostHomeCard/>
                        </div>
                    </div>
                </div>

                <div className="profile_content_right">
                    <div className="profile_infor-right">
                        <img src={user_ava} className='profile_user_image-right' alt="user image" />
                    </div>
                    <div className="profile_user_name-right">Nguyenhai</div>
                    <p className="profile_bio_right">Short bio about me</p>
                    <Link className='edit_profile_link' to='/setting'>Edit profile</Link>
                    <p className="copy_link">Copy link</p>
                </div>
            </div>

        </>
    )
}

export default Profile
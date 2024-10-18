import './PostHomeCard.css'
import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import user_ava from '../assets/user_ava.png'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

function PostHomeCard() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const menuRef = useRef(null); 
    const iconRef = useRef(null); 
  
   
    const handleIconClick = () => {
      setIsMenuVisible(!isMenuVisible);
    };
  
    // Đóng menu khi nhấn ra ngoài
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) && 
        !iconRef.current.contains(event.target)
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
            <div className="post_home_card">
                <Link className="post_link">
                    <div className="author_infor">
                        <img src={user_ava} alt="" className="author_image" />
                            <p className="author_name">Nguyenhai</p>
                    </div>
                    <div className="published_post_title">
                        Hello World 
                    </div>
                    <div className="published_post-content">
                        Hello World
                    </div>
                </Link>
                <div className="published_post-footer">
                    <div className="publish_post-footer_item-left">
                        <span className="published_post_time">25 minutes ago</span>
                        <div className="published_post-interact">
                            <FontAwesomeIcon className='published_post-like_icon' icon={faHeart} />
                            <span>2</span>
                        </div>
                        <div className="published_post-interact">
                            <FontAwesomeIcon className='published_post-comment_icon' icon={faComment} />
                            <span>1</span>
                        </div>
                    </div>
                    <button ref={iconRef} onClick={handleIconClick} className="published_post-footer_menu">
                        <FontAwesomeIcon className='published_post-footer_menu-icon' icon={faEllipsis} style={{color: "#6b6b6b",}} />  
                        {isMenuVisible && (
                            <div className="published_post-footer_menu-container">
                                <ul className="published_post-footer_menu-list">
                                    <li className='published_post-footer_menu-item'>Edit Post</li>
                                    <li className='published_post-footer_menu-item red_text'>Delete Post</li>
                                </ul>
                            </div>   
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}

export default PostHomeCard
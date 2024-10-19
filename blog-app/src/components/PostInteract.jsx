import './PostInteract.css'
import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

export default function PostInteract() {
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
        <div className="post_interact">
          <div className="post_interact-item-left">
              <span className="post_interact-time">June 12, 2024</span>
                <div className="post_interact-interact_action">
                  <FontAwesomeIcon className='post_interact-like_icon' icon={faHeart} />
                  <span>2</span>
                </div>
                <div className="post_interact-interact_action">
                  <FontAwesomeIcon className='post_interact-comment_icon' icon={faComment} />
                    <span>1</span>
                  </div>
            </div>
            <button ref={iconRef} onClick={handleIconClick} className="post_interact-menu">
            <FontAwesomeIcon className='post_interact-menu-icon' icon={faEllipsis} style={{color: "#6b6b6b",}} />  
            {isMenuVisible && (
                <div className="post_interact-menu-container">
                    <ul className="post_interact-menu-list">
                        <li className='post_interact-menu-item'>Edit Post</li>
                        <li className='post_interact-menu-item red_text'>Delete Post</li>
                    </ul>
                </div>   
            )}
        </button>
          </div>
       
        </>
    )
}
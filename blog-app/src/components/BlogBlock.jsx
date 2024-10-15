import postImage from '../assets/postImage.jpg'
import user_ava from '../assets/user_ava.png'
import './BlogBlock.css';
import { Link } from 'react-router-dom';

function BlogBlock(){
    return(
      <>
      <div className="post_card">
        <div className='post-item'>
          
          <Link className='post-link' to="/Post" target="_blank">
            <div className="image_container">
              <img src={postImage} className="post-image" alt="post_image" />
            </div>
          </Link>

          <div className="post-content">

            <h2 className='post-content_title'>
              <Link className='post-link' to="/Post" target="_blank">
                [CODE MUSIC BOT FOR DISCORD] - Phần 3: Lập trình các tính năng
              </Link>
            </h2>

          </div>

          <div className='post-footer'>

            <img src={user_ava} alt="user_ava" className="post-author_ava" />
            <div className='post-info'>

              <span className='post-author_name'>Đỗ Nhật Thành</span>
              <br />
              <span className='post-date'>06 May 2022</span>

            </div>

          </div>

        </div>

      </div>
      </>
    )
}

export default BlogBlock
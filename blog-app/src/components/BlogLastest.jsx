import postImage from '../assets/postImage.jpg'
import user_ava from '../assets/user_ava.png'
import './BlogLastest.css';
import { Link } from 'react-router-dom';

function BlogLastest(){
    return(
      <>
      <div className="post_lastest">
        <div className='post_lastest-item'>
          
          <Link className='post_lastest-link' to="/Post" target="_blank">
            <img src={postImage} className="post_lastest-image" alt="post_image" />
          </Link>

          <div className="post_lastest-content">
            <div className="author_info">
                <img src={user_ava} alt="user_ava" className="author_ava" />
                <div className="author_name">Đỗ Nhật Thành</div>
            </div>

            <h2 className='post_lastest-content_title'>
              <Link className='post_lastest-link' to="/Post" target="_blank">
                [CODE MUSIC BOT FOR DISCORD] - Phần 3: Lập trình các tính năng
              </Link>
            </h2>

              <div className='post_lastest-date'>May 06 , 2022</div>

          </div>

        </div>

      </div>
      </>
    )
}

export default BlogLastest
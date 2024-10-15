import postImage from '../assets/postImage.jpg'
import user_ava from '../assets/user_ava.png'
import './BlogBlock.css';
import { Link } from 'react-router-dom';

function BlogBlock(){
    return(
      <>
      <div className="post_block">
        <div className='post_block-item'>
          
          <Link className='post_block-link' to="/Post" target="_blank">
            <img src={postImage} className="post_block-image" alt="post_image" />
          </Link>

          <div className="post_block-content">

            <h2 className='post_block-content_title'>
              <Link className='post_block-link' to="/Post" target="_blank">
                [CODE MUSIC BOT FOR DISCORD] - Phần 3: Lập trình các tính năng
              </Link>
            </h2>

            <p className='post_block-content_description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ad nihil a, 
              harum adipisci blanditiis aliquam aut in neque unde ipsa tempore! Itaque earum, optio voluptate exercitationem tenetur laborum sunt.
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

          </div>

          <div className='post_block-footer'>

            <img src={user_ava} alt="user_ava" className="post_block-author_ava" />
            <div className='post_block-info'>

              <span className='post_block-author_name'>Đỗ Nhật Thành</span>
              <br />
              <span className='post_block-date'>06 May 2022</span>

            </div>

          </div>

        </div>

      </div>
      </>
    )
}

export default BlogBlock
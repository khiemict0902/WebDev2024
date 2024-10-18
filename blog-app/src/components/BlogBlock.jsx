import postImage from '../assets/postImage.jpg'
import user_ava from '../assets/user_ava.png'
import './BlogBlock.css';
import { Link } from 'react-router-dom';
import post_image from '../assets/post_image.jpg'

function BlogBlock(){
    return(
      <>
      <div className="post_card">
        <div className='post-item'>
          <div className="post_image_container">
            <Link to='/post'  className='post-link' href="./Post" target="_blank">
              <img src={post_image } alt="" className="post_card_image" />
            </Link>
          </div>

          <div className="post_cart_text">
            <h1 className='post_card_title'>
              <Link to='/post'  className='post-link' href="./Post" target="_blank">
                3 Benefits of Minimalism In Interior Design.
              </Link>
            </h1>

            <p className="post_card-date">June 12, 2017</p>
          </div>

        </div>

      </div>
      </>
    )
}

export default BlogBlock
import './BlogCard.css';
import { Link } from 'react-router-dom';
import post_image from '../assets/post_image.jpg'

function BlogCard1({post, img, title, date}){
    return(
      <>
      <div className="post_card">
        <div className='post-item'>
          <div className="post-item_container">
            <div className="post_image_container">
              <Link to={post}  className='post-link' href="./Post" target="_blank">
                <img src={img} alt="" className="post_card_image" />
              </Link>
            </div>

            <div className="post_cart_text">
                  <Link to={post}  className='post-link' href="./Post" target="_blank">
                    <div className='post_card_title'>
                      <h1 >
                        {title}
                      
                    </h1>
              </div>
                  </Link>

              <p className="post_card-date">{date}</p>
            </div>

          </div>

        </div>

      </div>
      </>
    )
}

export default BlogCard1
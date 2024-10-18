import './BlogCard.css';
import { Link } from 'react-router-dom';
import post_image from '../assets/post_image.jpg'

function BlogCard2(){
    return(
      <>
        <div className="post_card">
            <div className='post-item'>
                <div className="post-item_container">
                    <div className="post_image_container">
                        <Link to='/post2'  className='post-link' href="./Post" target="_blank">
                        <img src='https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-fork-cut.jpg' alt="" className="post_card_image" />
                        </Link>
                    </div>

                    <div className="post_cart_text">
                        <Link to='/post'  className='post-link' href="./Post" target="_blank">
                            <div className='post_card_title'>
                                <h1>
                                Chicken and Spinach Manicotti
                                </h1>
                            </div>
                        </Link>

                        <p className="post_card-date">June 12, 2024</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}

export default BlogCard2
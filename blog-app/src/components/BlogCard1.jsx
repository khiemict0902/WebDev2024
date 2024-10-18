import './BlogCard.css';
import { Link } from 'react-router-dom';
import post_image from '../assets/post_image.jpg'

function BlogCard1(){
    return(
      <>
      <div className="post_card">
        <div className='post-item'>
          <div className="post-item_container">
            <div className="post_image_container">
              <Link to='/post1'  className='post-link' href="./Post" target="_blank">
                <img src='https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/ibs/ul/sus/66/0e/ibm_sustainability_healthcare_07d.component.crop-2by1-xl.ts=1728679259039.jpg/content/adobe-cms/us/en/topics/healthcare-technology/jcr:content/root/leadspace_container/leadspace_article' alt="" className="post_card_image" />
              </Link>
            </div>

            <div className="post_cart_text">
                  <Link to='/post'  className='post-link' href="./Post" target="_blank">
                    <div className='post_card_title'>
                      <h1 >
                      Healthcare Technology
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

export default BlogCard1
import './PostHomeCard.css'
import { Link } from "react-router-dom";
import PostInteract from './PostInteract'


function PostHomeCard({title, img, post}) {
    return (
        <>
            <div className="post_home_card">
                <div className="post_home_card-info">
                    <Link to={post} className="post_link">
                        <div className="published_post_title">
                            {title}
                        </div>
                        <div className="post_home_card-image_container">
                            <img src={img} className='post_home_card-image' alt="code"/>
                        </div>
                        
                    </Link>
                    <PostInteract/>
                </div>
                
                    
            </div>
        </>
    )
}

export default PostHomeCard
import './PostHomeCard.css'
import { Link } from "react-router-dom";
import PostInteract from './PostInteract'


function PostHomeCard2() {
    return (
        <>
            <div className="post_home_card">
                <div className="post_home_card-info">
                    <Link className="post_link">
                        <div className="published_post_title">
                        Chicken and Spinach Manicotti 
                        </div>
                        <div className="post_home_card-image_container">
                            <img src="https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-fork-cut.jpg" className='post_home_card-image' alt="code"/>
                        </div>
                        
                    </Link>
                    <PostInteract/>
                </div>
                
                    
            </div>
        </>
    )
}

export default PostHomeCard2
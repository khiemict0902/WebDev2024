import './PostHomeCard.css'
import { Link } from "react-router-dom";
import PostInteract from './PostInteract'


function PostHomeCard1() {
    return (
        <>
            <div className="post_home_card">
                <div className="post_home_card-info">
                    <Link className="post_link">
                        <div className="published_post_title">
                            Healthcare Technology 
                        </div>
                        <div className="post_home_card-image_container">
                            <img src="https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/ibs/ul/sus/66/0e/ibm_sustainability_healthcare_07d.component.crop-2by1-xl.ts=1728679259039.jpg/content/adobe-cms/us/en/topics/healthcare-technology/jcr:content/root/leadspace_container/leadspace_article" className='post_home_card-image' alt="code"/>
                        </div>
                        
                    </Link>
                    <PostInteract/>
                </div>
                
                    
            </div>
        </>
    )
}

export default PostHomeCard1
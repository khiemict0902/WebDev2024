import './Blogs.css';
import Iconplus from '../components/Iconplus';
import BlogBlock from '../components/BlogBlock';

function Blogs(){
    return(
        <div>
            <div>
                Blog
                <Iconplus />
            </div>
            
            <div >
                <h1>Featured</h1>
                <hr className="line"></hr>
                
                <div className="blog-blocks">
                    <BlogBlock />
                    <BlogBlock />
                    <BlogBlock />
                </div>
            </div>
            <div>
                <h1>All Posts</h1>
                <hr className="line"></hr>
                <div className="blog-blocks">
                    <BlogBlock />
                    <BlogBlock />
                    <BlogBlock />
                </div>
            </div>
        </div>
    )   
}

export default Blogs;

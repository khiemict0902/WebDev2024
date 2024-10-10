import './Blogs.css';
import Iconplus from '../components/Iconplus';
import BlogBlock from '../components/BlogBlock';
import NavBar from './NavBar';
import Pagination from '../components/Pagination'
import Footer from '../components/Footer';


function Blogs(){
    return(
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <div > 
                <Iconplus/>
            </div>
            

            <div className='blog_container'>
                <div className="blog_content">
                    <h2 className='title_blogs'>Featured</h2>
                    
                    <div className="blog-blocks">
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                    </div>
                
                    
                    <h2 className='title_blogs'>All Posts</h2>
                    <div className="blog-blocks">
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                    </div>
                    
                    <Pagination />
                </div>
            </div>   
            <footer>
                <Footer />
            </footer> 
        </div>
    )   
}

export default Blogs;

import './Blogs.css';
import BlogBlock from '../components/BlogBlock';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination'
import Footer from '../components/Footer';
import BlogLastest from '../components/BlogLastest'



function Blogs(){
    return(
        <div>
            <header>
                <NavBar data = {true}/>
            </header>
            
            <div className='blog_container'>
                <div className="blog_content">
                    <h2 className='title_blogs'>Lastest Posts</h2>
                    
                    <div className="blog-blocks_lastest">
                        <BlogLastest />
                        <BlogLastest />
                    </div>
                
                    
                    <h2 className='title_blogs'>All Posts</h2>
                    <div className="blog-blocks_all">
                        <BlogBlock />
                        <BlogBlock />
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

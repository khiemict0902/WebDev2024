import './Blogs.css';
import BlogBlock from '../components/BlogBlock';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination'
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'




function Blogs(){
    return(
        <div>
            <div className='blog_container'>
                <div className="blog_content">
                    
                    <div className="slider">

                    </div>
                
                    <div className="topic_container">
                        <ul className="topic_list">
                            <li className="topic_item ">
                                <button className="topic_button active">
                                    All
                                </button>
                            </li>
                            <li className="topic_item">
                                <button className="topic_button">
                                    Topic
                                </button>
                            </li>
                            <li className="topic_item">
                                <button className="topic_button">
                                    Topic
                                </button>
                            </li>
                            <li className="topic_item">
                                <button className="topic_button">
                                    Topic
                                </button>
                            </li>
                            <li className="topic_item">
                                <button className="topic_button">
                                    Topic
                                </button>
                            </li>
                            <li className="topic_item">
                                <button className="topic_button">
                                    Topic
                                </button>
                            </li>
                            <li className="topic_item">
                                <button className="topic_button">
                                    Topic
                                </button>
                            </li>
                            <li className="topic_item">
                                <button className="topic_button">
                                    Topic
                                </button>
                            </li>
                            <li className="topic_item">
                                <button className="topic_button">
                                    Topic
                                </button>
                            </li>
                        </ul>

                        <FontAwesomeIcon className='open_topic_menu' icon={faChevronDown} />

                    </div>
                    <div className="post_card-container">
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
                        <BlogBlock />
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

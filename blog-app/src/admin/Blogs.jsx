import './Blogs.css';
import BlogCard1 from '../components/BlogCard1';
import BlogCard2 from '../components/BlogCard2';
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
                                    Health
                                </button>
                            </li>
                            <li className="topic_item">
                                <button className="topic_button">
                                    Food
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
                        <BlogCard1 />
                        <BlogCard1 />
                        <BlogCard1 />
                        <BlogCard1 />
                        <BlogCard1 />
                        <BlogCard1 />
                        <BlogCard2 />
                        <BlogCard2 />
                        <BlogCard2 />
                        <BlogCard2 />
                        <BlogCard2 />
                        <BlogCard2 />
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

import './Blogs.css';
import BlogCard from '../components/BlogCard';
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
                    <BlogCard title='Healthcare Technology' date='June 12, 2024' post='/post1' img='https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/ibs/ul/sus/66/0e/ibm_sustainability_healthcare_07d.component.crop-2by1-xl.ts=1728679259039.jpg/content/adobe-cms/us/en/topics/healthcare-technology/jcr:content/root/leadspace_container/leadspace_article' />
                    <BlogCard title='Healthcare Technology' date='June 12, 2024' post='/post1' img='https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/ibs/ul/sus/66/0e/ibm_sustainability_healthcare_07d.component.crop-2by1-xl.ts=1728679259039.jpg/content/adobe-cms/us/en/topics/healthcare-technology/jcr:content/root/leadspace_container/leadspace_article' />
                    <BlogCard title='Healthcare Technology' date='June 12, 2024' post='/post1' img='https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/ibs/ul/sus/66/0e/ibm_sustainability_healthcare_07d.component.crop-2by1-xl.ts=1728679259039.jpg/content/adobe-cms/us/en/topics/healthcare-technology/jcr:content/root/leadspace_container/leadspace_article' />
                    <BlogCard title='Healthcare Technology' date='June 12, 2024' post='/post1' img='https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/ibs/ul/sus/66/0e/ibm_sustainability_healthcare_07d.component.crop-2by1-xl.ts=1728679259039.jpg/content/adobe-cms/us/en/topics/healthcare-technology/jcr:content/root/leadspace_container/leadspace_article' />
                    <BlogCard title='Healthcare Technology' date='June 12, 2024' post='/post1' img='https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/ibs/ul/sus/66/0e/ibm_sustainability_healthcare_07d.component.crop-2by1-xl.ts=1728679259039.jpg/content/adobe-cms/us/en/topics/healthcare-technology/jcr:content/root/leadspace_container/leadspace_article' />
                    <BlogCard title='Healthcare Technology' date='June 12, 2024' post='/post1' img='https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/ibs/ul/sus/66/0e/ibm_sustainability_healthcare_07d.component.crop-2by1-xl.ts=1728679259039.jpg/content/adobe-cms/us/en/topics/healthcare-technology/jcr:content/root/leadspace_container/leadspace_article' />
                        <BlogCard title='Chicken and Spinach Manicotti' date='June 12, 2024' post='/post2' img='https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-fork-cut.jpg' />
                        <BlogCard title='Chicken and Spinach Manicotti' date='June 12, 2024' post='/post2' img='https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-fork-cut.jpg' />
                        <BlogCard title='Chicken and Spinach Manicotti' date='June 12, 2024' post='/post2' img='https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-fork-cut.jpg' />
                        <BlogCard title='Chicken and Spinach Manicotti' date='June 12, 2024' post='/post2' img='https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-fork-cut.jpg' />
                        <BlogCard title='Chicken and Spinach Manicotti' date='June 12, 2024' post='/post2' img='https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-fork-cut.jpg' />
                        <BlogCard title='Chicken and Spinach Manicotti' date='June 12, 2024' post='/post2' img='https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-fork-cut.jpg' />
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

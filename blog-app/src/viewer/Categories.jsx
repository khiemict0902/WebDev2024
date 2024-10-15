import './Categories.css';
import BlogBlock from '../components/BlogBlock';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Categories(){
    return(
        <>
            <header>
                <NavBar />
            </header>
            <main className='category_content'>
                <div className="category_content_container">
                    <h2 className='category_title' >Type I</h2>
                    <div className='category_blogblock_container'>
                        <div className="blogblock_container">
                            <BlogBlock/>
                            <BlogBlock/>
                            <BlogBlock/>
                            <BlogBlock/>
                            <BlogBlock/>
                            <BlogBlock/>
                            <BlogBlock/>
                            <BlogBlock/>
                            <BlogBlock/>
                            <BlogBlock/>
                        </div>

                        < Pagination/>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Categories
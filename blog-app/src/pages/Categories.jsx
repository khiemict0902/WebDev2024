import './Categories.css';
import BlogBlock from '../components/BlogBlock';
import NavBar from './NavBar';
import Footer from '../components/Footer';

function Categories(){
    return(
        <>
            <header>
                <NavBar />
            </header>
            <main className='category_content'>
                <div className="category_content_container">
                    <div className='category_title'>
                        <h2 >Type I</h2>
                    </div>
                    <div className='category_blogblock_container'>
                        <div className="blogblock_container">
                            <BlogBlock/>
                            <BlogBlock/>
                            <BlogBlock/>
                            <BlogBlock/>
                            <BlogBlock/>
                            <BlogBlock/>

                        </div>

                        <div class='pagination'>
                        <a className='pagination_direction previous' href='#'>&laquo; Prev</a>
                            <a className='active' href='#'>1</a>
                            <a href='#'>2</a>
                            <a className='pagination_direction next' href='#'>Next &raquo;</a>

                        </div>
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
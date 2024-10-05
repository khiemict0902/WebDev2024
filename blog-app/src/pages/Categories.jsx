import './Categories.css';
import BlogBlock from '../components/BlogBlock';

function Categories(){
    return(
        <>
            <div>
                <header>

                </header>
                <main className='category_container'>
                    <div className="section_title">
                        <h2 className='category_title'> Type I </h2>
                    </div>
                    <div className='post_block-container'>
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
                </main>
                <footer>

                </footer>
            </div>
            <div></div>
        </>
    )
}

export default Categories
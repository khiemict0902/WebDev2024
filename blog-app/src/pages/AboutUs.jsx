import './AboutUs.css';
import userinterface from './assets/userinterface.png';
import association from './assets/association.png';
import friendship from './assets/friendship.png'
import NavBar from './NavBar';


function AboutUs(){
    return(
        <>
        <NavBar/>
        <div className='ABoutUS'>
            <div className="aboutus_container">
                <div className='introduction'>
                    <div className="introduction_heading">
                        <h1>About Us</h1>
                    </div>
                    
                    <div className="introduction_description">
                        <p1 >The platform signifies a substantial opportunity as a gift 
                        for users who aspire to embark on their journey of sharing ideas online in a professional, 
                        yet accessible manner. Its visually appealing design and intuitive interface, 
                        combined with an expansive interconnected community, facilitate not only the creation of a 
                        personal blog; but also support brand development, identity formation, and alignment with various relevant topics. 
                        This renders it particularly effective for attracting and engaging with a global audience.
                        However, one might ponder: what are you waiting for? Begin crafting your blog and delve into the blogging landscape today!</p1>
                    </div>

                    <div className="explore">
                        <button className='explore_button' onClick='clickHandler()'>
                            Explore!    
                        </button>
                    </div>
                </div>

                <div className='block'>
                    <div className='box'>
                        <div className="box_img">
                            <img className='img' src={userinterface} alt="User Interface" />

                        </div>
                        <div className="box_highlight">
                            <h2 className='highlight'>User-friendly</h2>
                        </div>
                        <div className='overlay'> 
                            <p className='text'>With a solid foundation, trusted by many users. We bring a product with many eye-catching, easy-to-use features. Users can easily create blogs and change page properties.</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className="box_img">
                            <img className='img' src={association} alt="Association" />

                        </div>
                        <div className="box_highlight">
                            <h2 className='highlight'> Huge Association</h2>
                        </div>
                        <div className='overlay'>
                            <p className='text'>With the participation of many users from countries around the world, different topics. Users can easily connect, search for useful information, and much more.</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className="box_img">
                            <img className='img' src={friendship} alt="Friend Ship" />
                        </div>
                        <div className="box_highlight">
                            <h2 className='hightlight'>Open - Community</h2>
                        </div>
                        <div className='overlay'>
                            <p className='text'>Community with many participants, users can easily connect with each other, share useful information, learn from each other</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}

export default AboutUs
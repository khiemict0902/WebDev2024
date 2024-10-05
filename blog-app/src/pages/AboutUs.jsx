import './AboutUs.css';
import userinterface from './assets/userinterface.png';
import association from './assets/association.png';
import friendship from './assets/friendship.png'


function AboutUs(){
    return(
        <div className='ABoutUS'>
            <div><h1 className='heading1'>About Us</h1>
            <p1 className='Introduction'>The platform signifies a substantial opportunity as a gift for users who aspire to embark on their journey of sharing ideas online in a professional, yet accessible manner. Its visually appealing design and intuitive interface, combined with an expansive interconnected community, facilitate not only the creation of a personal blog; but also support brand development, identity formation, and alignment with various relevant topics. This renders it particularly effective for attracting and engaging with a global audience. However, one might ponder: what are you waiting for? Begin crafting your blog and delve into the blogging landscape today!</p1>
            
            {/* <script>
                function clickHandler(){
                    
                }
            </script> */}
            </div>
            <button onClick='clickHandler()'>
                Explore!    
            </button>
            <div className='block'>
                <div className='box'>
                    <img className='box icon' src={userinterface} alt="User Interface" />
                    <h2 className='box highlight'>User-friendly</h2>
                    <div className='text'> 
                        <p className='overlay'>With a solid foundation, trusted by many users. We bring a product with many eye-catching, easy-to-use features. Users can easily create blogs and change page properties.</p>
                    </div>
                </div>

                <div className='box'>
                    <img className='box icon' src={association} alt="Association" />
                    <h2 className='box highlight'> Huge Association</h2>
                    <div className='text'>
                        <p className='overlay'>With the participation of many users from countries around the world, different topics. Users can easily connect, search for useful information, and much more.</p>
                    </div>
                </div>

                <div className='box'>
                    <img className='box icon' src={friendship} alt="Friend Ship" />
                    <h2 className='box hightlight'>Open - Community</h2>
                    <div className='text'>
                        <p className='overlay'>Community with many participants, users can easily connect with each other, share useful information, learn from each other</p>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default AboutUs
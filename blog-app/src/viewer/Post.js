import './Post.css';
import React, { useState, useEffect } from 'react'; // Import useState
import NavBar from '../components/NavBar';


function Post() {
    // Declare state to control Hide/Show
    const [isVisible, setIsVisible] = useState(true); // isVisible is true for the content to be visible 
    const [posts, setPosts] = useState({summary: []});
    // Function to handle when pressing hide/show button. This function will invert the state of isVisible.
    const toggleVisibility = () => {
        setIsVisible(!isVisible)    
    };
    // Initialize state to store the index of the currently selected item
    const [activeIndex, setActiveIndex] = useState(null);
    
    useEffect(() => {
        // Get data from JSON file
        const fetchPosts = async () => {
            const response = await fetch('/post-data.json');
            const data  = await response.json();
            setPosts(data.post);
        }
        fetchPosts();
    }, []);


    const renderContent = (content) => {
        // Check if content is an array
        if (!Array.isArray(content)) {
            console.error('Content is not an array:', content);
            return null; 
        }
        return (
            <div className="post_small-text">
                {content.map((item, index) => {
                    switch (item.type) {
                        case 'paragraph':
                            return (
                                <p key={index} className="post_line-post">{item.text}</p>
                            );
                        case 'commandList':
                            return (
                                <ul key={index} className="post_line-post">
                                    {item.commands.map((command, commandIndex) => (
                                        <li key={commandIndex}>{command}</li>
                                    ))}
                                </ul>
                            );
                        case 'image':
                            return (
                                <img key={index} src={item.src} alt={item.alt} className="post_picture" />
                            )
                        default:
                            return null;
                    }
                })}
            </div>
        )
    }
    // Check if posts is an array
    if (!Array.isArray(posts)) {
        return <div>No posts available</div>;
    }

    return (
        <>
        <NavBar/>
            <div lang="en">
                <head>
                    <title>Post</title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>
        
                <body className="post_layout-post">
                    <div className="post_site-content">
                        <div className="post_container">
                            {/* Site Title */}
                            <div className="post_main-title">
                                <h1 className="text-title">USTH Coders Club Blog</h1>
                                <p className="post_lead">Chia sẻ về lập trình</p>
                            </div>
        
                            {/* Content */}
                            <div className="post_main-content">
                                {/* Begin Article */}
                                {posts.map(post => ( 
                                    <div key={post.id} className="container">
                                        <div className="post_row">
                                            {/* Post Share */}
                                            <div className="post_share">
                                                <p>Share</p>
                                            </div>
                                            {/* Post */}
                                            <div className="post_post">
                                                <div className="post_mainheading">
                                                    {/* Author Box */}
                                                    <div className="post_info">
                                                        <div className="post_re-img">
                                                            <img src={post.author.image} alt="avatar" className="post_image"/>
                                                        </div>
                                                        <div className="post_text">
                                                            <p>{post.author.name}</p>
                                                            <div>{post.author.gen}</div>  
                                                        </div>
                                                    </div>
                                                    {/* Post Title */}
                                                    <h1 className="post_text-title">{post.title}</h1>
                                                </div>
                                                {/* Post Feature Image */}
                                                <img src={post.featureImage} alt="code" className="post_picture"/>
                                                {/* End Post Feature Image */}
                                                {/* Post Content */}
                                                <div className="post_article-post">
                                                    {/* Summary List */}
                                                    <div className="post_list-post">
                                                        <div className="post_block1">
                                                            <h1>Summary</h1>
                                                            {/* button Hide/Show */}
                                                            <button onClick={toggleVisibility}> 
                                                                {
                                                                    isVisible ? 'Hide' : 'Show'
                                                                }
                                                            </button>
                                                        </div>

                                                        {/* isVisible is true => div wil show
                                                        isVisible is false => div will hide */}
                                                        {/* list-content */}
                                                        {isVisible && (
                                                            <div id="post_block2">
                                                                <ul>
                                                                    {post.summary.map((item,index) => (
                                                                        <li key={index} className="post_topc">
                                                                        <a href={`#section-${index}`} onClick={() => setActiveIndex(index)}>{item.title}</a>
                                                                    </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )} 
                                                        {/* End list-content */}
                                                    </div>
                                                    {/* End Summary List */}
                                                    <p className="post_small_text">{post.content}</p>
                                                    
                                                   
                                                    {post.summary.map((item, index) => (
                                                        <div key={index} id={`section-${index}`}>
                                                            <h1>{item.title}</h1>
                                                            {renderContent(item.content)}
                                                        </div>
                                                    ))}
                                            
                                                </div>
                            
                                                <p>
                                                    <small>{post.date}</small>
                                                </p>
                                            </div>
                                            {/* End Post */}
                                        </div>
                                    </div>
                                ))}
                                {/* End Article */}
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </>
    );
}

export default Post
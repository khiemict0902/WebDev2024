import './Post.css';
import React, { useState } from 'react'; // Import useState

function Post() {
    // Declare state to control Hide/Show
    const [isVisible, setIsVisible] = useState(true); // isVisible is true for the content to be visible
    // Function to handle when pressing hide/show button. This function will invert the state of isVisible.
    const toggleVisibility = () => {
        setIsVisible(!isVisible)    
    }

    return (
        <div lang="en">
            <head>
                <title>Post</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
    
            <body className="layout-post">
                <div className="site-content">
                    <div className="container">
                        {/* Site Title */}
                        <div className="main-title">
                            <h1 className="text-title">USTH Coders Club Blog</h1>
                            <p className="lead">Chia sẻ về lập trình</p>
                        </div>
    
                        {/* Content */}
                        <div className="main-content">
                            {/* Begin Article */}
                            <div className="container">
                                <div className="row">
                                    {/* Post Share */}
                                    <div className="share">
                                        <p>Share</p>
                                    </div>
                                    {/* Post */}
                                    <div className="post">
                                        <div className="mainheading">
                                            {/* Author Box */}
                                            <div className="info">
                                                <div className="re-img">
                                                    <img src="https://demoda.vn/wp-content/uploads/2022/03/anh-cute-meo-le-luoi.jpg" alt="avatar" className="image"/>
                                                </div>
                                                <div className="text">
                                                    <p>Name</p>
                                                    <div>Gen</div>
                                                </div>
                                            </div>
                                            {/* Post Title */}
                                            <h1 className="text-title">[CODE MUSIC BOT FOR DISCORD] - Phần 3: Lập trình các tính năng</h1>
                                        </div>
                                        {/* Post Feature Image */}
                                        <img src="https://usth-coders-club.github.io/assets/images/posts/2022-05-06-discord-music-bot-3/banner.jpg" alt="code" className="picture"/>
                                        {/* End Post Feature Image */}
                                        {/* Post Content */}
                                        <div className="article-post">
                                            {/* Summary List */}
                                            <div className="list-post">
                                                <div className="block1">
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
                                                    <div id="block2">
                                                        <ul>
                                                            <li className="topc">
                                                                <a href="#Cấu trúc hoạt động của Bot">Cấu trúc hoạt động của Bot</a>
                                                            </li>
                                                            <li className="topc">
                                                                <a href="#handlers.js">handlers.js</a>
                                                            </li>
                                                            <li className="topc">
                                                                <a href="#play.js">play.js</a>
                                                            </li>
                                                            <li className="topc">
                                                                <a href="#pause.js">pause.js</a>
                                                            </li>
                                                            <li className="topc">
                                                                <a href="#resume.js">resume.js</a>
                                                            </li>
                                                            <li className="topc">
                                                                <a href="#skip.js">skip.js</a>
                                                            </li>
                                                            <li className="topc">
                                                                <a href="#back.js">back.js</a>
                                                            </li>
                                                            <li className="topc">
                                                                <a href="#stop.js">stop.js</a>
                                                            </li>
                                                            <li className="topc">
                                                                <a href="#nowplaying.js">nowplaying.js</a>
                                                            </li>
                                                            <li className="topc">
                                                                <a href="#queue.js">queue.js</a>
                                                            </li>
                                                            <li className="topc">
                                                                <a href="#Tổng kết">Tổng kết</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )} 
                                                {/* End list-content */}
                                            </div>
                                            {/* End Summary List */}
                                            <p>
                                            Ở Phần 2, UCC đã cùng các bạn đăng ký tài khoản Bot với Discord
                                            và đăng nhập vào nó bằng Javascript. Trong bài viết này, mình sẽ
                                            hướng dẫn các bạn lập trình đầy đủ các tính năng để con Bot của
                                            chúng ta chạy được nhạc nhé!
                                            </p>
                    
                                            <h2 id="Cấu trúc hoạt động của Bot">Cấu trúc hoạt động của Bot</h2>
                                            <p>Con Bot của chúng ta sẽ có những lệnh cơ bản của một Bot chơi nhạc:</p>
                                            <ul>
                                                <li>
                                                    <strong>play</strong>: chơi một bài nhạc
                                                </li>
                                                {/* Add more list items as necessary */}
                                            </ul>
                                            <h2 id="handlers.js">handlers.js</h2>
                                            <h2 id="play.js">play.js</h2>
                                            <h2 id="pause.js">pause.js</h2>
                                            <h2 id="resume.js">resume.js</h2>
                                            <h2 id="skip.js">skip.js</h2>
                                            <h2 id="back.js">back.js</h2>
                                            <h2 id="stop.js">stop.js</h2>
                                            <h2 id="nowplaying.js">nowplaying.js</h2>
                                            <h2 id="queue.js">queue.js</h2>
                                            <h2 id="Tổng kết">Tổng kết</h2>
                                        </div>
                    
                                        <p>
                                            <small>5 October 2024</small>
                                        </p>
                                    </div>
                                    {/* End Post */}
                                </div>
                            </div>
                            {/* End Article */}
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default Post
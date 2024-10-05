import './Post.css';

function Post() {
    return (
        <div lang="en">
          <head>
            <title>Demo</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
    
          <body className="layout-post">
            <div className="site-content">
              <div className="container">
                {/* Site Title */}
                <div className="main-title">
                  <h1 className="site-title">USTH Coders Club Blog</h1>
                  <p className="lead">Chia sẻ về lập trình</p>
                </div>
    
                {/* Content */}
                <div className="main-content">
                  <div className="row">
                    <div className="mainheading">
                      <div className="info">
                        <div className="re-img">
                          <img
                            src="https://demoda.vn/wp-content/uploads/2022/03/anh-cute-meo-le-luoi.jpg"
                            alt="avatar"
                            className="image"
                          />
                        </div>
                        <div className="text">
                          <p>Name</p>
                          <div>Gen</div>
                        </div>
                      </div>
                      <h1 className="text-title">
                        [CODE MUSIC BOT FOR DISCORD] - Phần 3: Lập trình các tính năng
                      </h1>
                    </div>
                  </div>
    
                  <div className="container1">
                    <img
                      src="https://usth-coders-club.github.io/assets/images/posts/2022-05-06-discord-music-bot-3/banner.jpg"
                      alt="code"
                      className="picture"
                    />
                  </div>
    
                  <div className="article-post">
                    <div className="list-post">
                      <div className="block1">
                        <h1>Summary</h1>
                        <p>hide</p>
                      </div>
    
                      <div className="block2">
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
                    </div>
    
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
              </div>
            </div>
          </body>
        </div>
      );
}

export default Post
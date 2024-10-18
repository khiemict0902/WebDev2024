import './Notification.css';
import NavBar from '../components/NavBar'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function Notification(){
    return(
        <>
            <div className="notification_container">
                <div className="notification_content">
                    <h1 className="notification_heading">Notifications</h1>
                    <div className="notification_nav">
                        <button className="notification_button">
                            <Link className="notification_nav_link active">All</Link>
                        </button>
                        <button className="notification_button">
                            <Link className="notification_nav_link">Unread</Link>
                        </button>
                    </div>
                    <div className="notification_list">
                        <div className="notification_list_container-all">
                            <ul className="notification_list_all">
                                <li className="notification_list_all-item">
                                    <Link className="notification_item-link">
                                        <div className="notification_item-content">
                                            <div className='notification_text'>
                                                <span className='black_text'>HHanhhhhh </span> responded to <span className='black_text'> Hello World</span>
                                            </div>

                                            <span className="notification_time">25 minutes ago</span>
                                            
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification_list_all-item">
                                    <Link className="notification_item-link">
                                        <div className="notification_item-content">
                                            <div className='notification_text'>
                                                <span className='black_text'>HHanhhhhh </span> responded to <span className='black_text'> Hello World</span>
                                            </div>

                                            <span className="notification_time">25 minutes ago</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification_list_all-item">
                                    <Link className="notification_item-link">
                                        <div className="notification_item-content">
                                            <div className='notification_text'>
                                                <span className='black_text'>HHanhhhhh </span> responded to <span className='black_text'> Hello World</span>
                                            </div>

                                            <span className="notification_time">25 minutes ago</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="notification_list_container-unread">
                            <ul className="notification_list_unread">
                                <li className="notification_list_unread-item">
                                    <Link className="notification_item-link">
                                        <div className="notification_item-content">
                                            <div className='notification_text'>
                                                <span className='black_text'>HHanhhhhh </span> responded to <span className='black_text'> Hello World</span>
                                            </div>
                                            <span className="notification_time">25 minutes ago</span>
                                        </div>
                                        <FontAwesomeIcon className='unread_icon' icon={faCircle} style={{color: "#000000",}} />
                                    </Link>
                                </li>
                                <li className="notification_list_unread-item">
                                    <Link className="notification_item-link">
                                        <div className="notification_item-content">
                                            <div className='notification_text'>
                                                <span className='black_text'>HHanhhhhh </span> responded to <span className='black_text'> Hello World</span>
                                            </div>
                                            <span className="notification_time">25 minutes ago</span>
                                        </div>
                                        <FontAwesomeIcon className='unread_icon' icon={faCircle} style={{color: "#000000",}} />
                                    </Link>
                                </li>
                                <li className="notification_list_unread-item">
                                    <Link className="notification_item-link">
                                        <div className="notification_item-content">
                                            <div className='notification_text'>
                                                <span className='black_text'>HHanhhhhh </span> responded to <span className='black_text'> Hello World</span>
                                            </div>
                                            <span className="notification_time">25 minutes ago</span>
                                        </div>
                                        <FontAwesomeIcon className='unread_icon' icon={faCircle} style={{color: "#000000",}} />
                                    </Link>
                                </li>
                                <li className="notification_list_unread-item">
                                    <Link className="notification_item-link">
                                        <div className="notification_item-content">
                                            <div className='notification_text'>
                                                <span className='black_text'>HHanhhhhh </span> responded to <span className='black_text'> Hello World</span>
                                            </div>
                                            <span className="notification_time">25 minutes ago</span>
                                        </div>
                                        <FontAwesomeIcon className='unread_icon' icon={faCircle} style={{color: "#000000",}} />
                                    </Link>
                                </li>
                                <li className="notification_list_unread-item">
                                    <Link className="notification_item-link">
                                        <div className="notification_item-content">
                                            <div className='notification_text'>
                                                <span className='black_text'>HHanhhhhh </span> responded to <span className='black_text'> Hello World</span>
                                            </div>
                                            <span className="notification_time">25 minutes ago</span>
                                        </div>
                                        <FontAwesomeIcon className='unread_icon' icon={faCircle} style={{color: "#000000",}} />
                                    </Link>
                                </li>
                                <li className="notification_list_unread-item">
                                    <Link className="notification_item-link">
                                        <div className="notification_item-content">
                                            <div className='notification_text'>
                                                <span className='black_text'>HHanhhhhh </span> responded to <span className='black_text'> Hello World</span>
                                            </div>
                                            <span className="notification_time">25 minutes ago</span>
                                        </div>
                                        <FontAwesomeIcon className='unread_icon' icon={faCircle} style={{color: "#000000",}} />
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification
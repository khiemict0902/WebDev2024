import './Setting.css'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Setting() {
    return (
        <>
            <div className="setting_container">
                <div className="setting_content">
                    <h1 className="setting_heading">Settings</h1>
                    <div className="setting_nav">
                        <button className="setting_button">
                            <Link className="setting_nav_link active">Profile</Link>
                        </button>
                        <button className="setting_button">
                                <Link className="setting_nav_link">Account</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting
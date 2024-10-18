import React from 'react';
import './sign_up.css';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    return (
        <div className="signup-wrapper">
            <div className="signup-container">
                <form className="signup-form">
                    <h2>Sign up</h2>
                    <input type="text" placeholder="Email or phone number"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Enter your password again"/>
                    <button type="submit"><Link to='/admin'>Finish</Link></button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;

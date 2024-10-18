import React from 'react';
import './sign_up.css';

const SignUpForm = () => {
    return (
        <div className="signup-wrapper">
            <div className="signup-container">
                <form className="signup-form">
                    <h2>Sign up</h2>
                    <input type="text" placeholder="Email or phone number" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Enter your password again" required />
                    <button type="submit">Finish</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;

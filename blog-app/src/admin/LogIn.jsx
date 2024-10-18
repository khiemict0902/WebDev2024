import './LogIn.css'; // Import your custom CSS file for styling

const Login = () => {
    return (
        <div className="login-container">
            <div className="background-pattern"></div> {/* Add a background pattern */}
            <div className="login-form-container">
                <div className="login-form">
                    <h2>Login</h2>
                    <p>Enter your details to get into your account</p>
                    <form>
                        <input type="text" placeholder="Your name" />
                        <input type="password" placeholder="Password" />
                        <div className="form-options">
                            <label className="remember-me">
                                <input type="checkbox" /> Remember
                            </label>
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <div className="sign-up">
                        <p>Don't have an account? <a href="#" className="create-account">Create one</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

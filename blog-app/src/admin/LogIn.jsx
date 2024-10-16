import './LogIn.css'; // Import your custom CSS file for styling
import NavBar from '../components/NavBar';
const Login = () => {
    return (
        <div className="login-container">
            <div className="background-pattern"></div> {/* Add a background pattern */}
            <div className="login-form-container">
                <div className="login-form">
                    <h2>Login</h2>
                    <p>Enter your detail to get in your account</p>
                    <form>
                        <input type="text" placeholder="Your name" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

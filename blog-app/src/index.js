
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AboutUs from "./intro/AboutUs";
import Blogs from "./admin/Blogs";
import Categories from "./admin/Categories";
import Write from "./admin/Write";
import Post from "./admin/Post"
import Post1 from "./admin/Post1"
import Footer from "./components/Footer";
import LogIn from "./intro/login";
import NavBar from "./components/NavBar";
import Notification from './admin/Notification'
import SignUp from "./intro/sign_up";
import Profile from "./admin/Profile";
import Setting from "./admin/Setting";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element = {<AboutUs/>} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="post" element={<Post />} />
          <Route path="post1" element={<Post1 />} />
          <Route path="categories" element={<Categories />} />
          <Route path="write" element={<Write />} />
          <Route path="footer" element={<Footer />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="notification" element={<Notification />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
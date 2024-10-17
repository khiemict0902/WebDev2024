
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AboutUs from "./intro/AboutUs";
import Blogs from "./admin/Blogs";
import Categories from "./admin/Categories";
import Write from "./admin/Write";
import Post from "./admin/Post"
import Footer from "./components/Footer";
import LogIn from "./admin/LogIn";
import NavBar from "./components/NavBar";
import Notification from './admin/Notification'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element = {<AboutUs/>} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="post" element={<Post />} />
          <Route path="categories" element={<Categories />} />
          <Route path="write" element={<Write />} />
          <Route path="footer" element={<Footer />} />
          <Route path="login" element={<LogIn />} />
          <Route path="navbar" element={<NavBar />} />
          <Route path="notification" element={<Notification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
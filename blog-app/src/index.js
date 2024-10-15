
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AboutUs from "./intro/AboutUs";
import Blogs from "./viewer/Blogs";
import Categories from "./viewer/Categories";
import Write from "./viewer/Write";
import Post from "./viewer/Post"
import Footer from "./components/Footer";
import NavBar from './components/NavBar';

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
          <Route path="navbar" element={<NavBar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);